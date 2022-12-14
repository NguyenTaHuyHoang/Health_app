let notification = $('.notification');

// check validation for client or employee
function validation(name, email, SDT, CCCD_CMND, gender) {

    //code kieemr tra mail
    let regexMail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // code kiểm tra phone
    var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (name == "") {
        notification.html("Vui lòng nhập tên!");
        return false;
    }
    else if (email == "") {
        notification.html("Vui lòng nhập email!");
        return false;
    }
    else if (gender == "") {
        notification.html("Vui lòng chọn giới tính!");
        return false;
    }
    else if (SDT == "") {
        notification.html("Vui lòng nhập số điện thoại!");
        return false;
    }
    else if (CCCD_CMND == "") {
        notification.html("Vui lòng nhập CMND_CCCD!");
        return false;
    }
    else if (!regexMail.test(email)) {
        notification.html("Vui lòng nhập đúng định dạng email!");
        return false;
    }
    else if (!regexPhone.test(SDT)) {
        notification.html("Vui lòng nhập đúng định dạng số điện thoại!");
        return false;
    }
    return true;

}

function validationService(name, price) {
    if (name == "") {
        notification.html("Vui lòng nhập tên dịch vụ!");
        return false;
    }
    else if (price == "") {
        notification.html("Vui lòng nhập giá của dịch vụ!");
        return false;
    }

    return true;
}

// this variable check is Exist in db 
let check = 1;

// get data from database 
async function checkIsExistByAPI(obj, apiUrl) {
    let dat = await fetch(apiUrl);
    let data = await dat.json();

    for (let i = 0; i < data.length; i++) {
        if (obj.CCCD_CMND == data[i].CCCD_CMND) {
            check = -1;
            break;
        }
        else if (obj.SDT == data[i].SDT) {
            check = -2;
            break;
        }
        else if (obj.BHYT != undefined && obj.BHYT == data[i].BHYT) {
            check = -3;
            break;
        }
        else if (obj.email == data[i].email) {
            check = -4;
            break;
        }
        else if (obj.specialist != undefined && obj.position != undefined
            && obj.position == data.position && obj.specialist == data.specialist) {
            check = -5;
            break;
        }
    }

    delete data;
}

async function checkExistService(obj) {
    let dat = await fetch("/admin/getAPI/services");
    let data = await dat.json();

    for (let i = 0; i < data.length; i++) {
        if (obj.serviceName == data[i].serviceName) {
            check = -1;
            break;
        }
    }

    delete dat;
    delete data;
}