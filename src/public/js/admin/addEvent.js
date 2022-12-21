// eventPOST
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
    if (validation(name, email, SDT, address, gender)) {

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

            eventPOST(dataSending, "add/Client", 'clientModal', "Tạo mới thành công!");
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

    if (validation(name, email, SDT, address, gender)) {

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
            eventPOST(dataSending, "add/employee", 'employeeModal', "Tạo mới thành công!");
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
            eventPOST(dataSending, "add/service", 'serviceModal', "Tạo mới thành công!");
        }
        else {
            notification.html("Dịch vụ này đã tồn tại!");
        }
        check = 1;
    }

});

