document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("atividadeForm");
    const mensagem = document.getElementById("mensagem");
    const respostasCorretas = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "a",
        q5: "a"
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let acertos = 0;
        let naoRespondidas = 0;

        Object.keys(respostasCorretas).forEach(function (pergunta) {
            const resposta = form.querySelector('input[name="' + pergunta + '"]:checked');
            if (!resposta) {
                naoRespondidas++;
            } else if (resposta.value === respostasCorretas[pergunta]) {
                acertos++;
            }
        });

        mensagem.classList.add("visible");
        if (naoRespondidas > 0) {
            mensagem.textContent = "Responda todas as perguntas. Faltam " + naoRespondidas + " resposta(s).";
            mensagem.style.borderColor = "#b7791f";
            return;
        }

        mensagem.style.borderColor = "#1464a5";
        mensagem.textContent = "Resultado: você acertou " + acertos + " de 5 perguntas.";
    });
});