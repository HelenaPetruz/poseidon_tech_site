const themeSwitch = document.getElementById("themeSwitch");

// Recupera o tema salvo
let tema = localStorage.getItem("tema");

// Se não existir, usa o tema do sistema
if (!tema) {
    tema = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// Aplica o tema
document.documentElement.setAttribute("data-bs-theme", tema);

// Atualiza o switch
themeSwitch.checked = tema === "dark";

// Alterna o tema ao mudar o switch
themeSwitch.addEventListener("change", () => {

    const novoTema = themeSwitch.checked ? "dark" : "light";

    document.documentElement.setAttribute("data-bs-theme", novoTema);

    localStorage.setItem("tema", novoTema);

});