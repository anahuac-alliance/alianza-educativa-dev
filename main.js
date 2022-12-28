(() => {
    "use strict";
    new class {
        constructor() {
            this.init()
        }
        init() {
            let t = document.querySelector("#coursesCarousel");
            new Flickity(t, {
                cellAlign: "left",
                contain: !0,
                pageDots: !1,
                prevNextButtons: !1
            })
        }
    };
    let t = document.querySelector("#showPassword"),
        e = document.querySelector("#passwordField");
    new class {
        constructor() {
            t.addEventListener("click", this.showPassword)
        }
        showPassword() {
            "password" == e.getAttribute("type") ? e.setAttribute("type", "text") : e.setAttribute("type", "password")
        }
    }
  })();