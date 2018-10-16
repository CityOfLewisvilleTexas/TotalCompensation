"use strict";
// load google charts


var app = new Vue({
    el: "#app",
    data: {
        colEmail: '',
        screenSize: 5,
        employeeData: {
			FirstName: '',
			LastName: '',
			Position: '',
			PayRate: '',
			HireDate: '',
			ReviewDate: '',
			DeptDesc: '',
			Medicare: ''
		},
		fromDate: moment().add(-365, 'days').format('D MMMM, YYYY'),
		toDate: moment().format('D MMMM, YYYY'),
		compData: [],
		ttlSalary: 0,
		isLoading: false

    },


    // start the app once the DOM is rendered
    mounted: function() {

    	google.charts.load('current', {'packages':['corechart']})
    	google.charts.setOnLoadCallback(function() {
			$('.parallax').parallax();
			Vue.nextTick(this.fetchValues)
    	}.bind(this))


    },
    watch: {
    	fromDate: function() {
    		if (this.fromDate) this.fetchValues()
    	},
    	toDate: function() {
    		if (this.toDate) this.fetchValues()
    	}
    },
	computed: {

		hoursTotal: function() {
			var sum = 0
			this.compData.forEach(function(row) {
				if (row.Type == 'HOURS') {sum+= row.Amt
				}
			})
			return sum
		},

		benefitsTotal: function() {
			var sum = 0
			this.compData.forEach(function(row) {
				if (row.Type == 'BENEFIT') {sum+= row.Amt
				}
			})
			return sum
		},

		deductionsTotal: function() {
			var sum = 0
			this.compData.forEach(function(row) {
				if (row.Type == 'DEDUCTION') {sum+= row.Amt
				}
			})
			return sum
		},

		taxTotal: function() {
			var sum = 0
			this.compData.forEach(function(row) {
				if (row.Type == 'TAX') {sum+= row.Amt
				}
			})
			return sum
		},

		taxTotalMedicare: function() {
			var sum = 0
			this.compData.forEach(function(row) {
				if (row.Code == 'MEDICARE') {
					sum+= row.Amt
				}
			})
			return sum
		},

		cityTtl: function() {
			var sum = app.hoursTotal + app.benefitsTotal + app.taxTotalMedicare //City matches Medicare Amt
			return sum
		},

		empTtl: function() {
			var sum = app.deductionsTotal
			return sum
		},

		ttlComp: function() {
			var sum = app.cityTtl  //+ app.empTtl - per Melinda 10/16/2018 - Do not include the Employee deductions total in the Total Comp calculations
			return sum
		}

	},
    methods: {

    	prettyDate: function(date) {
    		return moment(new Date()).format('MM-DD-YYYY')
    	},

        fetchValues: function() {
        	if (this.isLoading) { return }
        	else if (!this.fromDate || !this.toDate) {
        		alert('Be sure to select your dates!')
        		return
        	}
	        else {
	        	this.isLoading = true
	            axios.get('https://query.cityoflewisville.com/v2/?webservice=TotalCompensationGET', {
				params: {
					employeeEmail: localStorage.colEmail,
					FromDate: moment(this.fromDate, 'D MMMM, YYYY').format('YYYY-MM-DD'),
					ToDate: moment(this.toDate, 'D MMMM, YYYY').format('YYYY-MM-DD')
				}
				}).then(function(e) {

						this.isLoading = false

						app.employeeData.FirstName = e.data.Employee[0].FirstName
						app.employeeData.LastName = e.data.Employee[0].LastName
						app.employeeData.Position = e.data.Employee[0].PositionTitle
						app.employeeData.PayRate = e.data.Employee[0].RateAmount
						app.employeeData.HireDate = e.data.Employee[0].HireDate
						app.employeeData.ReviewDate = e.data.Employee[0].ReviewDate
						app.employeeData.DeptDesc = e.data.Employee[0].DepartmentDesc
	                    app.compData = e.data.Check

	                    app.initResizeListener()

						app.colEmail = localStorage.colEmail; // Get employee email from OAUTH

						//draw the pie chart
						app.drawCharts();
						Vue.nextTick(function() {
							var $from = $('#from-date').pickadate({ selectMonths: true, selectYears: 15, onClose: function() { $(document.activeElement).blur(); } })
							var $to = $('#to-date').pickadate({ selectMonths: true, selectYears: 15, onClose: function() { $(document.activeElement).blur(); } })

							var fPicker = $from.pickadate('picker')
							var tPicker = $to.pickadate('picker')

							// set the datepickers
							fPicker.set('select', this.fromDate, { format: 'd mmmm, yyyy' })
							tPicker.set('select', this.toDate, { format: 'd mmmm, yyyy' })


							$('#from-date').off('change')
							$('#to-date').off('change')
							var self = this
							$('#from-date').on('change', function(me) {
								var val = me.currentTarget.value
								this.fromDate = val ? moment(val, 'D MMMM, YYYY').format('D MMMM, YYYY') : ''
							}.bind(this))
							$('#to-date').on('change', function(me) {
								var val = me.currentTarget.value
								this.toDate = val ? moment(val, 'D MMMM, YYYY').format('D MMMM, YYYY') : ''
							}.bind(this))
						}.bind(this))
	                }.bind(this))
			}
        },

        initResizeListener: function() {
            app.setScreenSize()	;


            $(window).resize(function() {
                app.setScreenSize()
				app.drawCharts()
            })
        },

        setScreenSize: function() {
            var w = $(window).width()
            app.screenSize = (w > 1200) ? 4 : (w > 992) ? 3 : (w > 600) ? 2 : 1
            // 1 = small, 2 = medium, 3 = large, 4 = xlarge
        },

		drawCharts: function(mod) {
            Vue.nextTick(function() {
                app.drawPieChart();

            })
        },

		drawPieChart: function() {


            // apply data
            var data = google.visualization.arrayToDataTable([
				['Contributor', 'Total Dollars'],
				['Total Salary (City)', app.hoursTotal],
				['Total Benefits (City)', app.benefitsTotal],
				['Total Deductions (Employee)', app.empTtl],
				['Total Taxes (Employee)', app.taxTotal],
				['Medicare Match (City)', app.taxTotalMedicare]
			]);

            // chart options
            var options = {
                title: 'Total Compensation Breakdown' //+app.thisFY.yr,
            };

            // draw chart
            var chart = new google.visualization.PieChart(document.getElementById('piePortion'))
            chart.draw(data, options);

        },

		 // format numbers with commas and two decimal places
        format: function(num, round) {
            if (isNaN(num)) return -1
            if (round === undefined) round = 2
            return Number(num).toFixed(round).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // looks crazy..adds comma into numbers
        }


	}



})






