const loginBtn = document.getElementById("login");
let regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


loginBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let object = document.getElementById("object").value;
    let notification = document.getElementById("notification");
    if (email == "") {
        notification.innerHTML = "Bạn chưa nhập email!";
    }
    else if (password == "") {
        notification.innerHTML = "Bạn chưa nhập mật khẩu!";
    }
    else if (!regexMail.test(email)) {
        notification.innerHTML = "Vui lòng nhập đúng định dạng email!";
    }
    else if (object == "") {
        notification.innerHTML = "Vui lòng chọn đối tượng đăng nhập!";
    }
    else {
        let form_login = document.getElementById("form-login");
        form_login.action = `/${object}/login`;
        form_login.submit();
    }
})