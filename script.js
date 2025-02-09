class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.closeMenuOnClick = this.closeMenuOnClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle("fa-bars");
        this.mobileMenu.classList.toggle("fa-xmark");
    }

    closeMenuOnClick() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove("fa-xmark");
        this.mobileMenu.classList.add("fa-bars");
    }

    handleResize() {
        if (window.innerWidth > 1250) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove("fa-xmark");
            this.mobileMenu.classList.add("fa-bars");
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);

        // Adiciona evento de clique para cada link do menu
        this.navLinks.forEach(link => {
            link.addEventListener("click", this.closeMenuOnClick);
        });

        // Adiciona evento para redimensionamento da tela
        window.addEventListener("resize", this.handleResize);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li a"
);
mobileNavbar.init();
