let tamanhoFonte = 16;

function AumentarFonte() {
    tamanhoFonte = Math.min(tamanhoFonte + 2, 24);
    document.documentElement.style.setProperty('--font-size', tamanhoFonte + 'px');
}

function DiminuirFonte() {
    tamanhoFonte = Math.max(tamanhoFonte - 2, 12);
    document.documentElement.style.setProperty('--font-size', tamanhoFonte + 'px');
}

function ToggleContraste() {
    document.body.classList.toggle('high-contrast');
}

function LerPagina() {
    speechSynthesis.cancel();
    const texto = document.body.innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    speechSynthesis.speak(fala);
}

function PararLeitura() {
    speechSynthesis.cancel();
}