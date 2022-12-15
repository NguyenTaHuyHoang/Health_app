//This file use more function in validations.js

let id_ = "";

const confirmModal = document.getElementById('confirmModal')
confirmModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    id_ = button.getAttribute('data-id')
    let type = button.getAttribute('data-type')


    if (id_ == undefined)
        return;

    //remove
    if (type == "removeService") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn xóa dịch vụ này không?`, 'cfRemoveService');
    }
    else if (type == "disableClient") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn vô hiệu hóa tài khoản của khách hàng này không?`, 'cfDisableClient');
    }
    else if (type == "disableEmployee") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn vô hiệu hóa tài khoản của nhân viên này không?`, 'cfDisableEmployee');
    }
    // restore
    else if (type == "restoreEmployee") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn khôi phục tài khoản của nhân viên này không?`, 'cfRestoreEmployee');
    }
    else if (type == "restoreClient") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn khôi phục tài khoản của khách hàng này không?`, 'cfRestoreClient');
    }
    else if (type == "restoreService") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn khôi phục dịch vụ này không?`, 'cfRestoreService');
    }
    // destroy
    else if (type == "deleteClientForever") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn xóa vĩnh viễn tài khoản của khách hàng này không?`, 'cfDestroyClient');
    }
    else if (type == "deleteEmployeeForever") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn xóa vĩnh viễn tài khoản của nhân viên này không?`, 'cfDestroyEmployee');
    }
    else if (type == "deleteServiceForever") {
        updateContentOnConfirmModal("Xác nhận!", `Bạn có chắc muốn xóa vĩnh viễn dịch vụ này không?`, 'cfDestroyService');
    }
});