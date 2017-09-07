
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
		verifyCaptcha = function(captcha,callback){
			$.ajax({
				type: "POST", 
				dataType: "text", 
				url: "check_captcha.php", 
				data: {captcha:captcha}, 
				success: callback
			});
		};
	reutn{
		verifyNullString: verifyNullString,
		verifyPhone: verifyPhone,
		verifyEmail: verifyEmail,
		verifyCaptcha: verifyCaptcha
	};
});
