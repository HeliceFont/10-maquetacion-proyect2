document.addEventListener("DOMContentLoaded", (event)=>{
    //SELECCIONAR MIS 2 ELEMENTOS PRINCIPALES

    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // Funcion mostrar y ocultar menu
    const showHiddenMenu = () =>{
        let show =document.querySelector(".menu-mobile--show");

        if (show){
            mobile_menu.classList.remove("menu-mobile--show")
        }else{
            mobile_menu.classList.add("menu-mobile--show")
        }
    }

    // AL DAR CLICK AL BOTON DEL MENU, MOSTRAR EL MENU DE NAVEGACIÓN RESPONSIVE
    mobile_btn.addEventListener("click", showHiddenMenu)

    // AL REDIMENSIONAR LA PANTALLA POR DEBAJO DE 1000PX OCULTAR MENU
    window.addEventListener("resize",()=>{
        let window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000){
            mobile_menu.classList.remove("menu-mobile--show")
        }
    })

    // PODER CERRAR EL MENU CON EL BOTON X
    let btn_close = document.querySelector(".menu-mobile__close")

    btn_close.addEventListener("click",showHiddenMenu)
    
})