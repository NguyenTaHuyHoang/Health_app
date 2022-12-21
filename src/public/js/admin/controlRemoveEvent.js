// id_ is in file controlUIConfirmModal.js

$("#cfRemoveService").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `removeService`, 'confirmModal', `Vô hiệu hóa tài khoản ${id_} thành công!`);
});

$("#cfDisableClient").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `disableClient`, 'confirmModal', `Vô hiệu hóa tài khoản ${id_} thành công!`);
});

$("#cfDisableEmployee").click(function (e) {
    e.preventDefault();
    const dataSending = {
        id: id_,
    }
    eventPOST(dataSending, `disableEmployee`, 'confirmModal', `Vô hiệu hóa tài khoản ${id_} thành công!`);
});