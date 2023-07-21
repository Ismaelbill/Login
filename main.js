let matricule = document.querySelectorAll(".parent .formVal .form form .input");
let button = document.querySelector(".parent .formVal .form form [name=\"submit\"]");
let showHide = document.querySelector(".parent .formVal .form form .passBox button");



showHide.addEventListener("click", (ev) => {
    ev.preventDefault();
    if(showHide.parentElement.firstElementChild.type === "password") {
        showHide.parentElement.firstElementChild.type = "text";
        showHide.textContent = "Hide";
    }else {
        showHide.parentElement.firstElementChild.type = "password";
        showHide.textContent = "Show";
        
    }
});

document.onsubmit = (ev) => {
    matricule.forEach(val => {
        if(val.value === "") {
            ev.preventDefault();
                
        }
    });
} 



