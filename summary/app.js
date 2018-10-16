"use strict";

// Vue!
var app = new Vue({
    el: "#app",

    // vars
    data: {
        sections: [
            {
                icon: 'school',
                class: 's12',
                img: './assets/tuition2.jpg',
                title: 'Tuition Reimbursement',
                key: 'tuition-reimbursement',
                text: 'All regular full-time employees not on a Performance Improvement Plan who have completed six months employment are eligible to apply for tuition reimbursement for university and college educational programs, technical schools or business schools in pursuit of a GED, Associate\'s, Bachelor\'s or Master\'s Degree. Employees must request tuition reimbursement on an annual basis by May 1 prior to the beginning of the fiscal year. The availability of tuition reimbursement in any one fiscal year may vary depending on the financial status of the organization.'
            },
            {
                icon: 'insert_invitation',
                class: 's12',
                title: 'Longevity Pay',
                key: 'longevity',
                text: 'Regular Full-time employees receive longevity pay after one full year of service. Longevity pay is calculated on the basis of an employee\'s anniversary month at a rate of $4.00 per month for each year of service up to and including 25 years of service.'
            },
            {
                icon: 'business',
                class: 's12',
                img: './assets/medical2.jpg',
                title: 'Medical Plan',
                key: 'medical-plan',
                text: 'The City makes comprehensive group medical and dental coverage available to every Regular Full-time employee and pays a portion of the premium toward such coverage for as long as an employee is eligible and enrolled. Newly-hired employees should enroll themselves and their eligible dependents (if desired) for medical coverage within 30 days of hire. Once enrolled, an employee and his/her dependents are covered effective the employee\'s 31st day of employment.<br><br>The Group Medical Plan is offered based on the City\'s financial position. This benefit may be modified at any time.<br><br>If employees enroll for medical coverage and also elect either medical or dental coverage for their dependents, they will be responsible for paying their portion of the premium for the dependent coverage. The premium for dependent coverage will be deducted from employees\' paychecks twice each month, with each deduction representing 1/2 of a month\'s premium.<br><br>Vision benefits are available through the City\'s benefit package.<br><br>Employees who officially retire under TMRS may continue health insurance benefits at retirement. The employee must elect to continue health coverage no later than the day on which the employee retires. The employee may elect to continue coverage for dependents covered under the health plan on the day the employee elects coverage continuation. Retirees may add medical coverage for their spouse after retirement if the spouse incurs a change in family status and the retiree makes the election within 30 days of the qualifying event. If the retiree discontinues coverage after the initial election, the retiree is no longer eligible for coverage. Complete details of the City\'s Retiree Health Insurance Continuation Program are available from the Human Resources Department.<br><br>In accordance with Chapter 615 of the Local Government Code, the eligible survivor of a law enforcement officer or firefighter who suffers violent death in the course of performance of duty is entitled to purchase continued health insurance benefits. An eligible survivor is defined under the Act as a surviving spouse or a dependent. <b>In order to receive continuation coverage, the City of Lewisville Human Resources Department must be informed no later than the 90th day after the date that the law enforcement officer or firefighter died that the survivor elect to continue coverage.</b> Additional information concerning survivor benefits, including eligibility requirements, is provided separately by the Human Resources Department.<br><br>Specific and complete details of the City\'s medical plan are available in plan booklets supplied by the Human Resources Department.'
            },
            // {
            //     icon: 'how_to_reg',
            //     class: 's12',
            //     title: 'Health Insurance',
            //     key: 'health-insurance',
            //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            // },
            // {
            //     icon: 'mood',
            //     class: 's12',
            //     img: './assets/toothbrush2.jpg',
            //     title: 'Dental Insurance',
            //     key: 'dental-insurance',
            //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            // },
            // {
            //     icon: 'attach_money',
            //     class: 's12 x__l6',
            //     title: 'Flexible Spending',
            //     key: 'flexible-spending',
            //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            // },
            {
                icon: 'group',
                class: 's12 x__l6',
                title: 'Employee Assistance',
                key: 'employee-assistance-program',
                text: 'The City of Lewisville sponsors an Employee Assistance Program (EAP) which is available to all Regular Full-time employees. The purpose of the program is to provide confidential assistance to employees and family members with personal problems. Personal problems addressed by the EAP may include but are not limited to the following categories: emotional/psychological, marital/relationship, family, financial, legal, or alcohol/drug abuse issues. Each employee or dependent may be eligible for six counseling sessions per episode (problem) at NO COST. Services required beyond these six sessions may be covered by the City\'s medical plan. An employee or an employee\'s family member may find the contact information for the EAP directly at <a href="http://intranet.cityoflewisville.com">http://intranet.cityoflewisville.com</a> or may contact the City of Lewisville Human Resources Department for assistance.'
            },
            {
                icon: 'warning',
                class: 's12',
                img: './assets/life-insurance2.jpg',
                title: 'Life Insurance',
                key: 'life-insurance',
                text: '<u>Active Employees:</u><br>Group term life insurance coverage, including accidental death and dismemberment coverage, is provided to all Regular Full-time employees. Premiums are paid by the City. The waiting period for eligible employees is 30 days from the date of hire. Regular Full-time employees are covered for loss of life with a benefit of four times their base annual pay, up to a maximum specified annual maximum. If loss of life is due to an accident, independent of other causes, the benefit is three times their annual salary. The amount of the life insurance benefit applicable reduces at age 70 and again at age 75. Details are available in the plan booklet supplied by the Human Resources Department.<br><br><u>Retired Employees:</u><br>City employees who retire with the City through the Texas Municipal Retirement System and have at least ten years of service with the City of Lewisville, are eligible for $15,000 in life insurance.'
            },
            {
                icon: 'beach_access',
                class: 's12',
                img: './assets/vacation.jpg',
                title: 'Vacation Leave',
                key: 'vacation-leave',
                text: 'Regular Full-time employees begin to accrue paid vacation benefits on the first day of employment as follows:<br><br>\
                    <div class="row">\
                        <table class="col s12 centered"> \
                            <thead><tr> \
                                <th>Years of Service</th> \
                                <th>Days of Vacation</th> \
                                <th>Days of Vacation (sworn Police/Fire)</th> \
                            </tr></thead> \
                            <tbody><tr> \
                                <td>1-4</td> \
                                <td>10</td> \
                                <td>*15 (7.5 Fire shifts)</td> \
                            </tr><tr> \
                                <td>5-9</td> \
                                <td>15</td> \
                                <td></td> \
                            </tr> \
                            </tr><tr> \
                                <td>10+</td> \
                                <td>20</td> \
                                <td>20 (10 Fire shifts)</td> \
                            </tr></tbody> \
                        </table> \
                        <small>*Sworn fire and police employees earn fifteen working days of vacation leave with pay in each year as per Local Government Code, Chapter 142.</small> \
                    </div> \
                    Eligible employees accrue vacation at the end of each pay period.<br><br>An employee unable to perform the essential functions of his/her job or work in a modified capacity shall cease the accrual of vacation leave at the end of 12 consecutive weeks from the day of injury, illness, or medical condition and when his/her FMLA leave has been exhausted. No employee shall be allowed to accumulate more vacation days than two times (2x) his/her annual rate of accrual.<br><br>Paid vacation benefits may be taken upon completion of 6 months of service. Employees shall be permitted to take vacation leave at such time, in the judgment of the director or supervisor, as will best serve the interest of the organization and the employee.<br><br>An employee with at least one (1) full year of service shall receive terminal pay for unused vacation leave up to two times (2X) the employee\'s annual rate of accrual.<br><br>Employees who are eligible for vacation leave must have advance approval from their supervisor to use it so that the work of the department does not suffer. Employees should ask their supervisor what the procedure is for their department for requesting vacation leave.'
            },
            {
                icon: 'sentiment_dissatisfied',
                class: 's12 x__l6',
                img: './assets/sick2.jpg',
                title: 'Sick Leave',
                key: 'sick-leave',
                text: 'Regular Full-time employees accrue Employee and Dependent Sick Leave/Funeral Leave (SL) at a rate of 15 days annually. Eligible employees accrue SL at the end of each pay period. Employees must complete one full pay period before accruals begin and upon termination, an employee must complete a full pay period in order to accrue time for that pay period. Employees scheduled 40 hours weekly may accrue up to 1,600 hours of SL. Firefighters assigned to work 24-hours shifts may accrue up to 2,400 hours. Once this cap is reached, accrual ceases.<br><br>SL may be used in the following circumstances:<ol><li>Absence due to the employee\'s illness or injury,</li><li>Employee\'s health care appointments that cannot be scheduled outside of regular working hours,</li><li>Maternity disability caused by pregnancy, childbirth or related medical condition,</li><li>Events which qualify under FMLA, and</li><li>To care for an ill son, daughter (under age 18), or spouse.</li></ol>'
            },
            {
                icon: 'access_time',
                class: 's12 x__l6',
                title: 'Compensatory Leave',
                key: 'compensatory-leave',
                text: '<b>In accordance with the law, the City of Lewisville reserves the right to compensate employees working overtime with compensatory time at a rate of 1 1/2 hours for each hour of overtime worked.</b><br><br>An employee who has accrued compensatory time may request, in advance, the use of compensatory  time off at any time consistent with the needs of the Department. The Department shall allow for the use of compensatory time within a reasonable period after the request is made unless the employee\'s absence from work would disrupt departmental operations. Employees may not accrue in excess of two hundred forty (240) hours (160 x 1.5) of compensatory time.<br><br>Compensatory time off taken during a work period does not count as "time worked" for purposes of calculating overtime.'
            },
            {
                icon: 'star',
                class: 's12',
                title: 'Holiday Pay',
                key: 'holiday-pay',
                text: 'The following days are observed by the City of Lewisville as legal holidays:<ol><li>New Year\'s Day</li><li>Martin Luther King Day</li><li>Memorial Day</li><li>Independence Day</li><li>**Labor Day/September 11</li><li>Thanksgiving Day</li><li>Day after Thanksgiving</li><li>Christmas Eve</li><li>Christmas Day</li></ol><small>** Labor Day designated for all employees except Sworn Fire Personnel; September 11 designated only for Sworn Fire Personnel</small>'
            },
            {
                icon: 'hot_tub',
                class: 's12',
                img: './assets/retirement2.jpg',
                title: 'Retirement (TMRS)',
                key: 'retirement',
                text: 'The City of Lewisville is a member of the Texas Municipal Retirement System (TMRS). Participation in the system is mandatory for all Regular Full-time employees. There is no maximum age for participation in TMRS.<br><br>The purpose of the retirement system is to provide adequate and dependable retirement benefits for employees retiring from Texas Municipalities. Each member city chooses from various TMRS options to "tailor" its retirement plan to meet local needs and circumstances. The following is a summary of the City of Lewisville options which comprise our official retirement plan:<ul class="browser-default"><li>Employees are vested after five years of service and may retire after 20 years of service or at age 60 with at least five years of service.</li><li>Employees contribute 7% of gross income and the City matches the employee contribution according to a 2-1 ratio. Contributions to the system are not taxable until withdrawn.</li><li>Occupational Disability Benefit</li><li>Vested Employee Survivor Benefit</li><li>Military Service Credit</li><li>Updated Service Credits and Increases in Retirement Annuities on an Annual Basis</li><li>Restricted Prior Service Credit</li><li>Prior City Service Buy-Back for employees hired prior to the last Council adoption date</li></ul>'
            }
        ]
    },

    // start here
    mounted: function() {
        // M.AutoInit()
        this.initScrollspy()
    },

    // functions
    methods: {
        initScrollspy: function() {
            var elems = document.querySelectorAll('.scrollspy')
            var instances = M.ScrollSpy.init(elems, { scrollOffset: 20 })
        }
    }
})