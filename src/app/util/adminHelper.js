ClientToRow = (client, index) => {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${client.name}</td>
        <td>${client.SDT}</td>
        <td>${client.email}</td>
        <td>${client.dateOfBirth}</td>
        <td><a href="#" role="button"
        data-name = "${client.name}"
            data-id="${client._id}"
            data-bd="${client.dateOfBirth}"
            data-email = "${client.email}"
            data-socialID = "${client.CCCD_CMND}"
            data-SDT = "${client.SDT}"
            data-image = "${client.image}"
            data-rank = "${client.rank}"    
            data-address = "${client.address}"
            data-gender = "${client.gender}" data-bs-toggle="modal" data-bs-target="#editRankModal" class="ECBtn">Chỉnh sửa</a></td>
        <td><a href="#" role="button" data-type="disableClient" data-id="${client._id}" data-bs-toggle="modal" data-bs-target="#confirmModal">Vô hiệu hóa</a></td>
    </tr>
    `
}

EmployeeToRow = (employee, index) => {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${employee.name}</td>
        <td>${employee.SDT}</td>
        <td>${employee.email}</td>
        <td>${employee.position}</td>
        <td>${employee.dateOfBirth}</td>
        <td><a href="#" role="button" 
            data-name = "${employee.name}"
            data-id="${employee._id}"
            data-bd="${employee.dateOfBirth}"
            data-email = "${employee.email}"
            data-socialID = "${employee.CCCD_CMND}"
            data-SDT = "${employee.SDT}"
            data-image = "${employee.image}"
            data-address = "${employee.address}"
            data-specialist = "${employee.specialist}"
            data-position = "${employee.position}"
            data-gender = "${employee.gender}" data-bs-toggle="modal" data-bs-target="#editPositionModal" class="EPBtn">Sửa vị trí</a></td>
        <td><a href="#" role="button" data-type="disableEmployee" data-id="${employee._id}" data-bs-toggle="modal" data-bs-target="#confirmModal">Vô hiệu hóa</a></td>
    </tr>
    `
}

ServiceToRow = (service, index) => {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${service.serviceName}</td>
        <td>${service.price}đ</td>
        <td><a href="#" role="button"
            data-name = "${service.serviceName}"
            data-id="${service._id}"
            data-price="${service.price}"
            data-bs-toggle="modal" data-bs-target="#serviceModal"
            class="changeServiceInfo"
            >Chỉnh sửa</a></td>
        <td><a href="#" role="button" data-type="removeService" data-id="${service._id}" data-bs-toggle="modal" data-bs-target="#confirmModal">Xóa</a></td>
    </tr>
    `
}

module.exports = {
    getListClient: (clients, type) => {
        data = '';

        for (let i = 0; i < clients.length; i++) {
            data += ClientToRow(clients[i], i + 1);
        }

        if (clients.length == 0)
            data = '<tr><td colspan="7">Không có tài khoản khách hàng nào.</td></tr>';

        return `
        <table class="table mt-3 mb-3 table-striped table-hover" id="${type}">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">STT</th>
                <th scope="col">Tên khác hàng</th>
                <th scope="col">SDT</th>
                <th scope="col">email</th>
                <th scope="col" colspan = "3">Ngày sinh</th>
            </tr>
            </thead>
            <tbody>
                ${data}
            </tbody>
        </table>
        `
    },

    getListEmployee: (Employees, type) => {
        data = ``

        for (let i = 0; i < Employees.length; i++) {
            data += EmployeeToRow(Employees[i], i + 1);
        }

        if (Employees.length == 0)
            data = '<tr><td colspan="8">Không có tài khoản nhân viên nào.</td></tr>';

        return `
        <table class="table mt-3 mb-3 table-striped table-hover" id="${type}">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">STT</th>
                <th scope="col">Họ Tên</th>
                <th scope="col">SDT</th>
                <th scope="col">email</th>
                <th scope="col">Chức vụ</th>
                <th scope="col" colspan = "3">Ngày sinh</th>
            </tr>
            </thead>
            <tbody>
                ${data}
            </tbody>
        </table>
        `
    },
    getListService: (Services, type) => {
        data = ``;

        for (let i = 0; i < Services.length; i++) {
            data += ServiceToRow(Services[i], i + 1);
        }

        if (Services.length == 0)
            data = '<tr><td colspan="5">Không có dịch vụ nào.</td></tr>';

        return `
        <table class="table mt-3 mb-3 table-striped table-hover" id="${type}">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">STT</th>
                <th scope="col">Tên dịch vụ</th>
                <th scope="col" colspan="3">đơn giá</th>
            </tr>
            </thead>
            <tbody>
                ${data}
            </tbody>
        </table>
        `
    }
}