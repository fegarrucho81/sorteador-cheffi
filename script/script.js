function sortear() {
    const nomes = [
        "felipe",
        "davi",
        "daniel",
        "isabella",
        "gabriel",
        "liria",
        "fernanda",
        "mariana",
        "giovanna",
        "beatriz",
        "isaque",
        "bruno",
        "clara",
        "willian",
        "bi",
        "luquinhas",
        "gi do lipe",
        "dani quesada",
        "barbara",
        "murilo",
        "flor"
    ];

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];

    document.getElementById("resultado").textContent = sorteado;
}