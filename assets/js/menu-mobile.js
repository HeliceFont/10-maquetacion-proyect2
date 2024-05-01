

document.addEventListener("DOMContentLoaded", (event) => {
    //SELECCIONAR MIS 2 ELEMENTOS PRINCIPALES
    const mobile_btn = document.querySelector(".navbar__mobile-btn");
    const mobile_menu = document.querySelector(".menu-mobile");

    // Funcion mostrar y ocultar menu
    const showHiddenMenu = () => {
        mobile_menu.classList.toggle("menu-mobile--show");
    }

    // AL DAR CLICK AL BOTON DEL MENU, MOSTRAR EL MENU DE NAVEGACIÓN RESPONSIVE
    mobile_btn.addEventListener("click", showHiddenMenu);

    // AL REDIMENSIONAR LA PANTALLA POR DEBAJO DE 1000PX OCULTAR MENU
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    // PODER CERRAR EL MENU CON EL BOTON X
    let btn_close = document.querySelector(".menu-mobile__close");

    btn_close.addEventListener("click", showHiddenMenu);

    //  Desplegar submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");
    menu_item.forEach(item => {
        item.addEventListener("click", (event) => {
            let submenu = item.querySelector(".menu-mobile__submenu-mobile");
            submenu.classList.toggle("submenu-mobile--show");
        });

    });
})







// document.addEventListener("DOMContentLoaded", (event)=>{
//     //SELECCIONAR MIS 2 ELEMENTOS PRINCIPALES

//     const mobile_btn = document.querySelector(".navbar__mobile-btn");
//     const mobile_menu = document.querySelector(".menu-mobile");

//     // Funcion mostrar y ocultar menu
//     const showHiddenMenu = () =>{
//         let show =document.querySelector(".menu-mobile--show");

//         if (show){
//             mobile_menu.classList.remove("menu-mobile--show")
//         }else{
//             mobile_menu.classList.add("menu-mobile--show")
//         }
//     }

//     // AL DAR CLICK AL BOTON DEL MENU, MOSTRAR EL MENU DE NAVEGACIÓN RESPONSIVE
//     mobile_btn.addEventListener("click", showHiddenMenu)

//     // AL REDIMENSIONAR LA PANTALLA POR DEBAJO DE 1000PX OCULTAR MENU
//     window.addEventListener("resize",()=>{
//         let window_width = parseInt(document.body.clientWidth);

//         if (window_width >= 1000){
//             mobile_menu.classList.remove("menu-mobile--show")
//         }
//     })

//     // PODER CERRAR EL MENU CON EL BOTON X
//     let btn_close = document.querySelector(".menu-mobile__close")

//     btn_close.addEventListener("click",showHiddenMenu)

//     // Desplegar submenus
//     let dropdown = document.querySelectorAll()


