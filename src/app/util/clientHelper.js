module.exports = {
    // This function for multi Object
    getListInvoice: function () {
        const template = `
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
        for(let i = 0; i < 40; i++) {
            data += template;
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

    getListAppointment : function () {
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