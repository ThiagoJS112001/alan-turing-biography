function redirecionamento() {
    var confirmacao = confirm("Você será redirecionado para outra página. Deseja continuar?");
    if (confirmacao) {
        window.open("https://www.caiena.net/blog/teste-turing-o-que-e-historia-desdobramentos", "_blank");
    }
}

function redirecionar() {
    var confirmacao = confirm("Você será redirecionado para outra página. Deseja continuar?");
    if (confirmacao) {
        window.open("https://revistagalileu.globo.com/Tecnologia/noticia/2018/03/origem-da-computacao-maquina-de-turing-e-construida-em-madeira.html", "_blank");
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Theme switcher
const toggleSwitch = document.querySelector('#toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme);