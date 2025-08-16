document.addEventListener("DOMContentLoaded", function() {
    const btnSwitch = document.getElementById("switch-mode");
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "true") {
        document.body.classList.add("dark");
        btnSwitch.classList.add("actived");
        btnSwitch.setAttribute("aria-pressed", "true");
    }
    
    // Event listener para cambiar tema
    btnSwitch.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        btnSwitch.classList.toggle("actived");

        const isDarkMode = document.body.classList.contains("dark");
        localStorage.setItem("dark-mode", isDarkMode);
        
        // Actualizar aria-pressed para accesibilidad
        btnSwitch.setAttribute("aria-pressed", isDarkMode.toString());
    });
});



