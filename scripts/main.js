document.addEventListener("DOMContentLoaded", function() {
    let currentTitle = document.title;
    let startX;

    function addMeta(name, content) {
        var meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
    }

    addMeta("author", "Lewis Carroll");             
    addMeta("genre", "Fantasia, Aventura");         
    addMeta("language", "pt-BR");                   
    addMeta("copyright", "© 2024 Editora Griffo's"); 
    addMeta("description", "As Aventuras de Alice no País das Maravilhas");
    addMeta("publisher", "Editora Griffo's");       
    addMeta("identifier", "978-3-16-148410-0");      
    addMeta("date", "2024-10-15");           
    
    if (currentTitle === "" || currentTitle === null) {
        document.title = "As Aventuras de Alice no País das Maravilhas";
    } else {
         document.title = currentTitle + " | As Aventuras de Alice no País das Maravilhas";
    }

});

// NAVEGAÇÃO POR GESTOS

// NAVEGAÇÃO POR GESTOS PARA TODAS AS PÁGINAS

// Páginas gerais (fora dos capítulos)
const generalPages = [
    "index.html",
    "nav.html"
];

// Páginas dos capítulos
const chapterPages = [
    "capitulos/capitulo1.html",
    "capitulos/capitulo2.html",
    "capitulos/capitulo3.html"
    // Adicione mais capítulos conforme necessário
];

// Função para obter o índice da página atual nas páginas gerais
function getCurrentGeneralPageIndex() {
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual
    return generalPages.findIndex(page => page === currentPage); // Compara com os nomes no array generalPages
}

// Função para obter o índice da página atual nos capítulos
function getCurrentChapterPageIndex() {
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual
    return chapterPages.findIndex(page => currentPage === `capitulos/${page}`);
}

// Função para navegar para a página anterior (páginas gerais)
function goToPreviousGeneralPage() {
    const currentIndex = getCurrentGeneralPageIndex();
    if (currentIndex > 0) {
        window.location.href = generalPages[currentIndex - 1]; // Navega para a página anterior
    }
}

// Função para navegar para a próxima página (páginas gerais)
function goToNextGeneralPage() {
    const currentIndex = getCurrentGeneralPageIndex();
    if (currentIndex < generalPages.length - 1) {
        window.location.href = generalPages[currentIndex + 1]; // Navega para a próxima página
    }
}

// Função para navegar para a página anterior (capítulos)
function goToPreviousChapter() {
    const currentIndex = getCurrentChapterPageIndex();
    if (currentIndex > 0) {
        window.location.href = chapterPages[currentIndex - 1]; // Navega para o capítulo anterior
    }
}

// Função para navegar para a próxima página (capítulos)
function goToNextChapter() {
    const currentIndex = getCurrentChapterPageIndex();
    if (currentIndex < chapterPages.length - 1) {
        window.location.href = chapterPages[currentIndex + 1]; // Navega para o próximo capítulo
    }
}

// Variável para armazenar o ponto inicial do toque
let startX;

// Evento de toque inicial
function touchStart(event) {
    startX = event.touches[0].clientX;
}

// Evento de movimento de toque
function touchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX;

    // Navegação para páginas gerais (index.html e nav.html)
    if (window.location.pathname.includes("index.html") || window.location.pathname.includes("nav.html")) {
        if (deltaX > 50) {
            goToPreviousGeneralPage(); // Deslizar para a direita
        } else if (deltaX < -50) {
            goToNextGeneralPage(); // Deslizar para a esquerda
        }
    }

    // Navegação para os capítulos
    else if (window.location.pathname.includes("capitulos")) {
        if (deltaX > 50) {
            goToPreviousChapter(); // Deslizar para a direita (voltar capítulo)
        } else if (deltaX < -50) {
            goToNextChapter(); // Deslizar para a esquerda (avançar capítulo)
        }
    }
}

// Adiciona os eventos de toque à página
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("touchstart", touchStart); 
    document.addEventListener("touchend", touchEnd);    
});
