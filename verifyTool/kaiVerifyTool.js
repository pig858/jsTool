
var kaiVerifyTool = {};

kaiVerifyTool = (function (){

	var verifyNullString = function(id){
			if(!id){
				return false;
			}else{
				return true;
			}
		},
		verifyPhone = function(phone){
			var regPhone = /^(09[0-9]{2}-[0-9]{3}-[0-9]{3})|(09[0-9]{2}[0-9]{3}[0-9]{3})|([0][1-9]{1,4}-[0-9]{3,4}[0-9]{3,4})|([0][1-9]{1,4}-[0-9]{3,4}-[0-9]{3,4})$/;
	    	if(!regPhone.test(phone)){
	    		return false;
	    	}else{
	    		return true;
	    	}
		},
		verifyEmail = function(email){
			var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
	        if(!regEmail.test(email)) {
	            return false;
	        }else{
	            return true;
	        }
		},
		verifyCaptcha = function(captcha,callBack){
			//check captcha
			$.ajax({
              	type: "POST", 
                dataType: "text", 
                url: "check_captcha.php", 
                data: {captcha:captcha}, 
                success: callBack
            });
        },
        verifySameAccount = function(account,callBack){
        	$.ajax({
        		type: "POST",
        		dataType: "text",
        		url: "check_sameAccount.php",
        		data: {account:account},
        		success:callBack
        	});
        },
        verifyPWD = function(pwd){
        	var regPWD = /^[A-za-z0-9]{6,30}$/;
        	if(!regPWD.test(pwd)){
        		return false;
        	}else{
        		return true;
        	}
	},
	verifyTwID = function(twid) {
		
		//建立字母分數陣列(A~Z)

		var city = new Array(
				1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11,
				20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30
		)

		id = id.toUpperCase();

		// 使用「正規表達式」檢驗格式

		if (id.search(/^[A-Z](1|2)\d{8}$/i) == -1) {

			// alert('基本格式錯誤');

			return false;

		} else {

			//將字串分割為陣列(IE必需這麼做才不會出錯)

			id = id.split('');

			//計算總分

			var total = city[id[0].charCodeAt(0) - 65];

			for (var i = 1; i <= 8; i++) {

				total += eval(id[i]) * (9 - i);

			}

			//補上檢查碼(最後一碼)

			total += eval(id[9]);

			//檢查比對碼(餘數應為0);

			return ((total % 10 == 0));

		}

	};
	return{
		verifyNullString: verifyNullString,
		verifyPhone: verifyPhone,
		verifyEmail: verifyEmail,
		verifyCaptcha: verifyCaptcha,
		verifySameAccount: verifySameAccount,
		verifyPWD: verifyPWD,
		verifyTwID: verifyTwID
	};
}());
