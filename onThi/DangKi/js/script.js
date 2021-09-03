let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phoneNum = document.getElementById("phoneNum");
let pass = document.getElementById("pass");
let rePass = document.getElementById("rePass");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");

submit.addEventListener("click", ()=>{
    let flag = true
    if(userName.value==""){
        alert("Tên đăng nhập không đc để trống.")
        flag = false
    }
    if(!email.value){
        alert("Email không đc để trống.")
        flag = false
    }
    if(!phoneNum.value){
        alert("Số điện thoại không đc để trống.")
        flag = false
    }
    if(!pass.value){
        alert("Mật khẩu không đc để trống.")
        flag = false
    }

    if(!validateEmail(email.value)){
        alert("Đia chỉ email không đúng định dạng")
        flag = false
    }
    if(rePass.value!==pass.value){
        alert("Mật khẩu nhập lại khác mật khẩu đã nhập")
        flag = false
    }
    if(!validatePhoneNum(phoneNum.value)){
        alert("Số điện thoại sai")
        flag = false
    }
    if(flag==true){
        alert("Đăng kí thành công")
    }
})
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhoneNum(phoneNum) {
    const re = /^\d{10}$/;
    return re.test(String(phoneNum));
}