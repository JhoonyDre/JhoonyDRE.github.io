        var link = document.querySelector(".btn-write-us");
        var popup = document.querySelector(".modal-login");
        var close = document.querySelector(".modal-close");
        var login = document.querySelector("[name=login]");
        var form = document.querySelector("form");
        var email = document.querySelector("[name=email]");
        var text = document.querySelector("[name=text]");
        var storage = localStorage.getItem("login");


        form.addEventListener("submit", function (evt) {
            if (!login.value || !email.value) {
                evt.preventDefault();
                popup.classList.add("modal-error");
            } else {
                localStorage.setItem("login", login.value);
            }
        });


        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
			popup.classList.remove("modal-up");
            if (storage) {
                login.value = storage;
                email.focus();
            } else {
                login.focus();
            }
        });


        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
			popup.classList.add("modal-up");
            popup.classList.remove("modal-error");
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                    popup.classList.add("modal-up");
                    popup.classList.remove("modal-error");
                }
            }
        });
