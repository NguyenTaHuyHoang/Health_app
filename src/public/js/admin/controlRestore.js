// id_ is in file controlUIConfirmModal.js

$("#cfRestoreClient").click(function (e) {
    e.preventDefault();
    eventPOST(null, `restoreClient/${id_}`, 'confirmModal', `Khôi phục tài khoản ${id_} thành công!`);
});

$("#cfRestoreEmployee").click(function (e) {
    e.preventDefault();
    eventPOST(null, `restoreEmployee/${id_}`, 'confirmModal', `Khôi phục tài khoản ${id_} thành công!`);
});

$("#cfRestoreService").click(function (e) {
    e.preventDefault();
    eventPOST(null, `restoreService/${id_}`, 'confirmModal', `Khôi phục tài khoản ${id_} thành công!`);
});