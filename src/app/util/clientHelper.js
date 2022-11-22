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
            <td>${invoiceEle.employee.name}</td>
            <td>${invoiceEle.date}</td>
            <td>${sumPrice}</td>
            <td>${status}</td>
            <td><a href="#" role="button">Xóa</a></td>
        </tr>
    `
}

function getBtn(className, val) {
    return `
        <li class="page-item ${className}" value=${val}><a class="page-link" href="#">${val}</a></li>
    `;
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

        for (let i = 0; i < listInvoice.length; i++) {
            data += getInvoiceElement(listInvoice[i], i + 1);
        }
        let max = 4;
        for (let j = 0; j < max; j++) {
            data += `<tbody class="noneDisplay" id="InvoiceTable${j + 1}">`;
            for (let i = 0; i < 10; i++) {
                data += template;
            }
            btn += getBtn("invoiceBtn", j + 1);
            data += `</tbody>`;
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
    getListPatient: function () {
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
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><a href="#" role="button">Xóa</a></td>
            </tr>
            </tbody>
        </table>
        `;
    },

    getListAppointment: function () {
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
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><a href="#" role="button">Xóa</a></td>
            </tr>
            </tbody>
            <tbody>
                <tr class="a2">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><a href="#" role="button">Xóa</a></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><a href="#" role="button">Xóa</a></td>
                </tr>
            </tbody>

        </table>
        `;
    }
}