ClientToRow = (client, index) => {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${client.name}</td>
        <td>${client.SDT}</td>
        <td>${client.email}</td>
        <td>${client.dateOfBirth}</td>
        <td><a href="#" role="button">Chỉnh sửa</a></td>
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
        <td><a href="#" role="button">Chỉnh sửa</a></td>
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
        <td><a href="#" role="button">Chỉnh sửa</a></td>
        <td><a href="#" role="button" data-type="removeService" data-id="${service._id}" data-bs-toggle="modal" data-bs-target="#confirmModal">Xóa</a></td>
    </tr>
    `
}

module.exports = {
    getListClient: (clients) => {
        data = '';

        for (let i = 0; i < clients.length; i++) {
            data += ClientToRow(clients[i], i + 1);
        }

        if (clients.length == 0)
            data = '<tr><td colspan="7">Không có tài khoản khách hàng nào.</td></tr>';

        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
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

    getListEmployee: (Employees) => {
        data = ``

        for (let i = 0; i < Employees.length; i++) {
            data += EmployeeToRow(Employees[i], i + 1);
        }

        if (Employees.length == 0)
            data = '<tr><td colspan="8">Không có tài khoản nhân viên nào.</td></tr>';

        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
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
    getListService: (Services) => {
        data = ``;

        for (let i = 0; i < Services.length; i++) {
            data += ServiceToRow(Services[i], i + 1);
        }

        if (Services.length == 0)
            data = '<tr><td colspan="5">Không có dịch vụ nào.</td></tr>';

        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
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