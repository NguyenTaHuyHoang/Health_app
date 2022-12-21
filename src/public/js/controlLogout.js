let formSubmit = document.getElementById('dynamicForm');
$('#logoutBtn').click(function (e) {
    e.preventDefault();

    formSubmit.action = `logout`;
    formSubmit.submit();
});