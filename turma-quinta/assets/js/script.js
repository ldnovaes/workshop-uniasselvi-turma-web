const sidebar = document.querySelector(".sidebar");
const buttonSidebar = document.querySelector(".btn-sidebar");
var sidebarOpened = false;

buttonSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
    sidebarOpened = !sidebarOpened;
})

document.addEventListener("click", (event) => {

    var eventTarget = event.target;

    if (sidebar.classList.contains("sidebar-open") && !buttonSidebar.contains(eventTarget) && sidebarOpened == true) {
        sidebar.classList.remove("sidebar-open");
        sidebarOpened = !sidebarOpened;
    }
})