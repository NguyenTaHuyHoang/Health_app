function getInvoiceElement(invoiceEle, stt, type) {
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
            <td>${invoiceEle.employee.name}</td>
            <td>${invoiceEle.dateOfCreation}</td>
            <td>${sumPrice}</td>
            <td>${status}</td>
            <td><a href="#" role="button" data-id="${invoiceEle._id}" data-type="removeInvoice" data-bs-toggle="modal" data-bs-target="#confirmModal">Xóa</a></td>
        </tr>
    `
}

function getBtn(className, val) {
    return `
        <li class="page-item ${className}" value=${val}><a class="page-link" href="#">${val}</a></li>
    `;
}

function getOneMedicalRecord(val, index) {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${val}</td>
    </tr>
    `
}

function getRowAppointment(val, index, type) {
    return `
    <tr>
        <th scope="row">${index}</th>
        <td>${val.employee.name}</td>
        <td>${val.employee.SDT}</td>
        <td>${val.dateOfCreation}</td>
        <td><a href="#" data-id="${val._id}" data-type="removeAppointment" data-bs-toggle="modal" data-bs-target="#confirmModal">Xóa</a></td>
    </tr>
    `
}

module.exports = {
    // This function for multi Object
    getListInvoice: function (listInvoice, type) {

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
                    data += getInvoiceElement(listInvoice[j * 10 + i], j * 10 + i + 1, type);
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
                <th scope="col">Bác sĩ phụ trách</th>
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
    getListPatient: function (MH) {
        let data = '';
        for (let i = 0; i < MH.length; i++) {
            data += getOneMedicalRecord(MH[i], i + 1);
        }
        if (MH.length == 0) {
            data += `<tr><th colspan="2">Không lịch sử bệnh án.</th></tr>`
        }

        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">STT</th>
                <th scope="col">Tên bệnh</th>
            </tr>
            </thead>
            <tbody>
                ${data}
            </tbody>
        </table>
        `;
    },

    getListAppointment: function (AMs, type) {

        data = '';
        for (let i = 0; i < AMs.length; i++) {
            data += getRowAppointment(AMs[i], i + 1, type);
        }

        if (AMs.length == 0) {
            data += `<tr><th colspan="5">Không có cuộc hẹn nào.</th></tr>`
        }

        return `
        <table class="table mt-3 mb-3 table-striped table-hover">
            <thead>
            <tr class="table-dark text-white">
                <th scope="col">STT</th>
                <th scope="col">Bác sĩ phụ trách</th>
                <th scope="col">SDT</th>
                <th scope="col" colspan="2">Ngày hẹn khám</th>
            </tr>
            </thead>
            <tbody>
                ${data}
            </tbody>

        </table>
        `;
    }
}