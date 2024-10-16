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

const pages = [
    "index.html",
    "nav.html",
    "../capitulos/capitulo1.html",
    "../capitulo2.html",
    "../sscapitulo3.html"
    // Adicione mais capítulos conforme necessário
];

// Função para obter o índice da página atual
function getCurrentPageIndex() {
    const currentPage = window.location.pathname;
    return pages.findIndex(page => currentPage.endsWith(page));
}

// Função para navegar para a página anterior
function goToPreviousPage() {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex > 0) {
        window.location.href = pages[currentIndex - 1];
    }
}

// Função para navegar para a próxima página
function goToNextPage() {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    }
}

// Evento de toque inicial
function touchStart(event) {
    startX = event.touches[0].clientX; 
}

// Evento de movimento de toque
function touchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX; 

    if (deltaX > 50) {
        goToPreviousPage();
    } else if (deltaX < -50) {
        goToNextPage();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("touchstart", touchStart); 
    document.addEventListener("touchend", touchEnd);    
});
