# verifyTool
it's for everyone to varify the form or anything you want to check,
ill keep update it if i have new method to it:)
# Usage
download it and import .js file to your project
then you can use like this
```
if(!kaiVerifyTool.verifyNullString){
    //do false stuff
}else{
    //do true stuff
}
```

check captcha is different from other function
```
kaiVerifyTool.verifyCaptcha(captcha,function(data){
    if(!data){
        //do the false stuff
      	alert("Uh oh!");
    }else{
        //do the true stuff
      	alert("you got it!");
    }
})
```
