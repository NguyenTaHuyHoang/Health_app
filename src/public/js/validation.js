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

// when click add Client button
$('#addCBtn').click(async function (e) {
    e.preventDefault();
    // get information about client
    let name = $("#name").val();
    let gender = $("#gender").val();
    let id = $("#id").val();
    let email = $("#email").val();
    let BD = $("#BD").val();
    let address = $("#address").val();
    let BHYT = $("#BHYT").val();
    let SDT = $("#SDT").val();

    // check validation
    if (validation(name, email, SDT, id, gender)) {

        // transfer data to JSON
        let dataSending = {
            name: name,
            gender: gender,
            dateOfBirth: BD,
            rank: "Bạc",
            image: "https://img.icons8.com/metro/100/null/gender-neutral-user.png",
            CCCD_CMND: id,
            email: email,
            SDT: SDT,
            password: id,
            address: address,
            BHYT: BHYT,
            url: window.location.href,
        }

        await checkIsExistByAPI(dataSending, "/admin/getAPI/clients");

        // Synchronous
        console.log(check);
        if (check == 1) {
            $.ajax({
                type: "POST",
                url: "add/Client",
                data: dataSending,
                dataType: "JSON",
                success: function (response) {
                    console.log("Đăng ký thành công!");
                }
            });
            notification.html(" ");
            $('#clientModal').modal('hide');
            alert("Đăng ký thành công!")
        }
        else if (check == -1) {
            notification.html("CCCD/CMND đã được sử dụng!");
        }
        else if (check == -2) {
            notification.html("SDT đã được sử dụng!");
        }
        else if (check == -3) {
            notification.html("Bảo hiểm y tế đã được sử dụng!");
        }
        else if (check == -4) {
            notification.html("Email đã được sử dụng!");
        }

        check = 1;
    }
});

// when click add Employee button
$('#addEmployeeBtn').click(async function (e) {
    e.preventDefault();
    let name = $("#nameE").val();
    let gender = $("#genderE").val();
    let id = $("#idE").val();
    let email = $("#emailE").val();
    let BD = $("#BD_E").val();
    let address = $("#addressE").val();
    let department = $("#department").val();
    let position = $("#position").val();
    let SDT = $("#SDT_E").val();

    if (validation(name, email, SDT, id, gender)) {

        let dataSending = {
            name: name,
            gender: gender,
            dateOfBirth: BD,
            rank: "Bạc",
            image: "https://img.icons8.com/metro/100/null/gender-neutral-user.png",
            CCCD_CMND: id,
            email: email,
            SDT: SDT,
            password: id,
            address: address,
            specialist: department,
            position: position,
            url: window.location.href,
        }

        //check is Exist 
        await checkIsExistByAPI(dataSending, "/admin/getAPI/employees");


        if (check == 1) {
            $.ajax({
                type: "POST",
                url: "add/employee",
                data: dataSending,
                dataType: "JSON",
                success: function (response) {
                    console.log("Đăng ký thành công!");
                }
            });
            notification.html(" ");
            $('#employeeModal').modal('hide');
            alert("Đăng ký thành công!")
        }
        else if (check == -1) {
            notification.html("CCCD/CMND đã được sử dụng!");
        }
        else if (check == -2) {
            notification.html("SDT đã được sử dụng!");
        }
        else if (check == -3) {
            notification.html("Bảo hiểm y tế đã được sử dụng!");
        }
        else if (check == -4) {
            notification.html("Email đã được sử dụng!");
        }

        check = 1;
    }
});

// event add Service
$('#addServiceBtn').click(async function (e) {
    e.preventDefault();
    let name = $("#nameS").val();
    let price = $("#price").val();

    if (validationService(name, price)) {
        let dataSending = {
            serviceName: name,
            price: price
        }

        await checkExistService(dataSending);

        if (check == 1) {
            $.ajax({
                type: "POST",
                url: "add/service",
                data: dataSending,
                dataType: "JSON",
                success: function (response) {
                    console.log("Đăng ký thành công!");
                }
            });
            notification.html(" ");
            $('#serviceModal').modal('hide');
            alert("Đăng ký thành công!")
        }
        else {
            notification.html("Dịch vụ này đã tồn tại!");
        }
        check = 1;
    }

});

