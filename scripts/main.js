document.addEventListener("DOMContentLoaded", function() {
    var currentTitle = document.title;

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


    let startX;

        // Array com a ordem das páginas
        const pages = [
            "index.html",
            "nav.html",
            "capitulo1.html",
            "capitulo2.html",
            // Adicione mais páginas conforme necessário
            "capitulo25.html"
        ];

        // Função para obter o índice da página atual
        function getCurrentPageIndex() {
            const currentPage = window.location.pathname.split("/").pop();
            return pages.indexOf(currentPage);
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
            startX = event.touches[0].clientX; // Captura a posição inicial do toque
        }

        // Evento de movimento de toque
        function touchEnd(event) {
            const endX = event.changedTouches[0].clientX; // Captura a posição final do toque
            const deltaX = endX - startX; // Diferença entre o ponto inicial e final do toque

            if (deltaX > 50) {
                // Deslize para a direita (volta à página anterior)
                goToPreviousPage();
            } else if (deltaX < -50) {
                // Deslize para a esquerda (avança à próxima página)
                goToNextPage();
            }
        }

        // Adiciona os eventos de toque à página
        document.addEventListener("DOMContentLoaded", function () {
            document.addEventListener("touchstart", touchStart); // Quando o toque começa
            document.addEventListener("touchend", touchEnd);     // Quando o toque termina
        });
});