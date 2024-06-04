let headerLis = document.querySelectorAll("header .container li a")
for (let i = 0; i < headerLis.length; i++) {
    headerlis[i].onclick = function() {
        console.log("welcome")
        for (let ii = 0; ii < headerLis.length; ii++) {
            headerlis[ii].classList.remove("selected")
            headerlis[ii].setAttribute("seclect", "selected")
        }
        headerlis[i].classList.add("selected")
    }
}