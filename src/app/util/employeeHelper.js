function getInvoiceElement(invoiceEle, stt) {
    let sumPrice = 0;
    for (let i = 0; i < invoiceEle.service.length; i++) {
        sumPrice += invoiceEle.service[i].price;
    }

    let status = "";
    if (invoiceEle.status == true) status = "Đã thanh toán";
    else status = "Chưa thanh toán";

    return `
        <tr>
            <th scope="row">${stt}</th>
            <td>${invoiceEle._id}</td>
            <td>${invoiceEle.client.name}</td>
            <td>${invoiceEle.dateOfCreation}</td>
            <td>${sumPrice}</td>
            <td>${status}</td>
            <td><a href="#" role="button" data-id="${invoiceEle._id} " data-type="removeInvoice" data-bs-toggle="modal" data-bs-target="#confirmModal">Xóa</a></td>
        </tr>
    `
}

function getBtn(className, val) {
    return `
        <li class="page-item ${className}" value=${val}><a class="page-link" href="#">${val}</a></li>
    `;
}


function getRowAppointment(AM, index) {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${AM.client.name}</td>
        <td>${AM.client.SDT}</td>
        <td>${AM.dateOfCreation}</td>
        <td><a href="#" role="button" data-id="${AM._id}" data-type="removeAppointment" data-bs-toggle="modal" data-bs-target="#confirmModal">Xóa</a></td>
    </tr>
    `
}

function getRowService(service) {
    return `
    <div class="form-check col-md-4">
        <input
        class="form-check-input"
        type="checkbox"
        name="services"
        id="${service._id}"
        value="${service._id}"
        />
        <label class="form-check-label" for="${service._id}"> ${service.serviceName} : ${service.price}đ </label>
    </div>
    `
}

module.exports = {
    // This function for multi Object
    getListInvoice: function (listInvoice) {

        let template = `
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><a href="#" role="button">Xóa</a></td>
                </tr>
        `;

        let data = "";
        let btn = "";

        let max = parseInt(listInvoice.length / 10) + 1;
        for (let j = 0; j < max; j++) {
            data += `<tbody class="noneDisplay" id="InvoiceTable${j + 1}">`;
            for (let i = 0; i < 10; i++) {
                if (j * 10 + i < listInvoice.length) {
                    data += getInvoiceElement(listInvoice[j * 10 + i], j * 10 + i + 1);
                }
            }
            btn += getBtn("invoiceBtn", j + 1);
            data += `</tbody>`;
        }

        if (listInvoice.length == 0) {
            data += `<tr><th colspan="7">Không có hóa đơn nào.</th></tr>`
        }

        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">ID</th>
                <th scope="col">Mã hóa đơn</th>
                <th scope="col">Họ tên bệnh nhân</th>
                <th scope="col">Ngày khám</th>
                <th scope="col">Đơn giá</th>
                <th scope="col" colspan="2">Trạng thái</th>
            </tr>
            </thead>
            <tbody>
                ${data}
            </tbody>

        </table>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" class="page1" id="InvoicePre" value="1">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                
                ${btn}

                <li class="page-item" class="page1" id="InvoiceNext" value="${max}">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>

        `;
    },

    //Thí function for 1 Obj

    getListAppointment: function (AMs) {

        data = '';
        for (let i = 0; i < AMs.length; i++) {
            data += getRowAppointment(AMs[i], i + 1);
        }

        if (AMs.length == 0) {
            data += `<tr><th colspan="5">Không có cuộc hẹn nào.</th></tr>`
        }


        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">STT</th>
                <th scope="col">Họ tên bệnh nhân</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Ngày hẹn khám</th>
                <th scope="col" colspan="2">Trạng thái</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                ${data}
            </tr>
            </tbody>

        </table>
        `;
    },

    getListService: function (services) {
        let data = "";
        services.forEach(element => {
            data += getRowService(element);
        });
        return data;
    }
}