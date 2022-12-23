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

$("#cfRestoreAppointment").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `restoredAppointment/${id_}`, 'confirmModal', `Xóa cuộc hẹn ${id_} thành công!`);
});

$("#cfRestoreInvoice").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `restoredInvoice/${id_}`, 'confirmModal', `Xóa hóa đơn ${id_} thành công!`);
});