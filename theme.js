(function () {

    const savedTheme = localStorage.getItem("ohueli-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    window.setDarkMode = function () {
        document.body.classList.add("dark");
        localStorage.setItem("ohueli-theme", "dark");
    };

    window.setLightMode = function () {
        document.body.classList.remove("dark");
        localStorage.setItem("ohueli-theme", "light");
    };

})();
