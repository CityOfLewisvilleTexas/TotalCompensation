;(function() {
//alert('apps - col security');
    //redirects user if they navigate to apps/ instead of apps.cityoflewisville.com/; OAUTH will not redirect to apps/
    if (window.location.host === 'apps') {
        window.location = 'http://apps.cityoflewisville.com' + window.location.pathname + window.location.search + window.location.hash;
    } else {
        var apiUrl, oauthRedirectUrl;
        if (window.location.href.split('://')[1].split('.')[0].toLowerCase() !== 'apps') {
            apiUrl = 'https://query.cityoflewisville.com/';
            oauthRedirectUrl = 'http://' + window.location.href.split('://')[1].split('.')[0].toLowerCase() + '.cityoflewisville.com/oauthredirect/index.html';
        } else {
            apiUrl = 'https://ax1vnode1.cityoflewisville.com/';
            oauthRedirectUrl = 'http://apps.cityoflewisville.com/oauthredirect/index.html';
        }
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        };
        var code = getParameterByName('code');
		//alert(code);
        function getNewColAuthToken(code) {
            var redirectUrl = window.location.href.substr(0, window.location.href.indexOf('?'));
			//alert(redirectUrl);
            $.post(apiUrl + 'authenticate/', {
                    code: code,
                    redirectUrl: redirectUrl
			}, function(data) {
					if(data[0][0]['AUTH_TOKEN']){
					localStorage.colAuthToken = data[0][0]['AUTH_TOKEN'];
					window.location = localStorage.redirectUrl;
				}
				else{
					localStorage.removeItem('colAuthToken');
					alert('access denied');
				}
			})
        };
        function getNewCode() {
            localStorage.redirectUrl = window.location.href;
            window.location = 'https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=' + oauthRedirectUrl + '&client_id=819027772449-2us5mt2tu1ec84nve9353qka8i6mfj68.apps.googleusercontent.com';
        };
        function verifyColAuthToken(authToken) {
            $.post(apiUrl + 'v2',{
				webservice: 'ITS/Verify Auth Token',
				auth_token: authToken
			}, function(data) {
				// If user is not verified
				if (data['Verification'][0]['VERIFIED'] == 0) {
					getNewCode();
				// If user has been verified
				} else {
					localStorage.removeItem('redirectUrl');
					localStorage.colEmail = data['Verification'][0]['EMAIL'];
				}
			})
        };
        if (!localStorage.colAuthToken) {
            if (!code) {
				//alert('no token; no code');
                getNewCode();
            } else {
				//alert('no token; get new token');
                getNewColAuthToken(code);
            }
        } else {
            if (!code) {
				//alert('has token; no code');
                verifyColAuthToken(localStorage.colAuthToken);
            } else {
				//alert('has token; get new token');
                getNewColAuthToken(code);
            }
        }
    }
})();