
function validation(name, email, SDT, CCCD_CMND, gender) {
    let notification = document.getElementById("notification")

    //code kieemr tra mail
    let regexMail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // code kiểm tra phone
    var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (name == "") {
        notification.innerHTML = "Vui lòng nhập tên!";
        return false;
    }
    else if (email == "") {
        notification.innerHTML = "Vui lòng nhập email!";
        return false;
    }
    else if (gender == "") {
        notification.innerHTML = "Vui lòng chọn giới tính!";
        return false;
    }
    else if (SDT == "") {
        notification.innerHTML = "Vui lòng nhập số điện thoại!";
        return false;
    }
    else if (CCCD_CMND == "") {
        notification.innerHTML = "Vui lòng nhập CMND_CCCD";
        return false;
    }
    else if (!regexMail.test(email)) {
        notification.innerHTML = "Vui lòng nhập đúng định dạng email";
        return false;
    }
    else if (!regexPhone.test(SDT)) {
        notification.innerHTML = "Vui lòng nhập đúng định dạng số điện thoại!";
        return false;
    }
    return true;

}

let check = 1;

async function getAPI(obj, apiUrl) {
    let dat = await fetch(apiUrl);
    let clients = await dat.json();

    console.log(clients);
    for (let i = 0; i < clients.length; i++) {
        if (obj.CCCD_CMND == clients[i].CCCD_CMND) {
            check = -1;
            break;
        }

        else if (obj.SDT == clients[i].SDT) {
            check = -2;
            break;
        }

        else if (obj.BHYT == clients[i].BHYT && obj.BHYT != undefined) {
            check = -3;
            break;
        }

        else if (obj.email == clients[i].email) {
            check = -4;
            break;
        }
    }

    delete clients;
}

$('#addCBtn').click(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let gender = $("#gender").val();
    let id = $("#id").val();
    let email = $("#email").val();
    let BD = $("#BD").val();
    let address = $("#address").val();
    let BHYT = $("#BHYT").val();
    let SDT = $("#SDT").val();

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
            BHYT: BHYT,
            url: window.location.href,
        }

        getAPI(dataSending, "/admin/getAPI/client");


        setTimeout(() => {
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

                $('#addClientModal').modal('hide');
                alert("Đăng ký thành công!")
            }
            else if (check == -1) {
                notification.innerHTML = ("CCCD/CMND đã được sử dụng!");
            }
            else if (check == -2) {
                notification.innerHTML = ("SDT đã được sử dụng!");
            }
            else if (check == -3) {
                notification.innerHTML = ("Bảo hiểm y tế đã được sử dụng!");
            }
            else if (check == -4) {
                notification.innerHTML = ("Email đã được sử dụng!");
            }

            check = 1;
        }, 1000);

    };
});


$('#addEmployeeBtn').click(function (e) {
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
            position : position,
            url: window.location.href,
        }

        getAPI(dataSending, "/admin/getAPI/employee");


        setTimeout(() => {
            console.log(check);
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

                $('#addEmployeeModal').modal('hide');
                alert("Đăng ký thành công!")
            }
            else if (check == -1) {
                notification.innerHTML = ("CCCD/CMND đã được sử dụng!");
            }
            else if (check == -2) {
                notification.innerHTML = ("SDT đã được sử dụng!");
            }
            else if (check == -3) {
                notification.innerHTML = ("Bảo hiểm y tế đã được sử dụng!");
            }
            else if (check == -4) {
                notification.innerHTML = ("Email đã được sử dụng!");
            }

            check = 1;
        }, 1000);

    };
});