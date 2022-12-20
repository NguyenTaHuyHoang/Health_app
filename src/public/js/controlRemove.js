// id_ is in file controlUIConfirmModal.js

$("#cfRemoveAppointment").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `removeAppointment`, 'confirmModal', `Xóa cuộc hẹn ${id_} thành công!`);
});

$("#cfRemoveInvoice").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `removeInvoice`, 'confirmModal', `Xóa hóa đơn ${id_} thành công!`);
});