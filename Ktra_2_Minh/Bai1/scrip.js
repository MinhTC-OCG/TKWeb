let masp = document.getElementById("masp")
let tensp = document.getElementById("tensp")
let hinhThuc = document.getElementById("hinhThuc")
let soLuong = document.getElementById("soLuong")
let donGia = document.getElementById("donGia")
let tongTien = document.getElementById("tongTien")
const kq = document.getElementById("btn_kq")

kq.addEventListener('click', (e)=>{
    e.preventDefault()

    //Ktra trống
    if(!masp.value){
        alert("Mã sp không được để trống")
    }
    if(!tensp.value){
        alert("Tên sp không được để trống")
    }
    if(!hinhThuc.value){
        alert("Hình thức không được để trống")
    }
    if(!soLuong.value){
        alert("Số lượng không được để trống")
    }
    if(!donGia.value){
        alert("Đơn giá không được để trống")
    }

    //Tính tổng tiền
    soLuongValue = Number(soLuong.value)
    donGiaValue = Number(donGia.value)
    if(hinhThuc.value=='L'||hinhThuc.value=='l'){
        tongTien.value=soLuongValue*donGiaValue
    }
    else if(hinhThuc.value=='B'||hinhThuc.value=='b'){
        tongTien.value=100*donGiaValue+(soLuongValue-100)*0.5*donGiaValue
    }
    else{
        alert("Sai hình thức")
    }

    //Loại đơn giá
    if(donGiaValue>=150000){
        alert("Đó là SP chất lượng cao")
    }
    else{
        alert("Đó là SP thông thường")
    }
})