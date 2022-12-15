// id_ is in file controlUIConfirmModal.js

$("#cfDestroyService").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `destroyService/${id_}`, 'confirmModal', `Xóa vĩnh viễn tài khoản ${id_} thành công!`);
});

$("#cfDestroyClient").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `destroyClient/${id_}`, 'confirmModal', `Xóa vĩnh viễn tài khoản ${id_} thành công!`);
});

$("#cfDestroyEmployee").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `destroyEmployee/${id_}`, 'confirmModal', `Xóa vĩnh viễn tài khoản ${id_} thành công!`);
});