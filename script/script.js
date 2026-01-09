function sortear() {
    const nomes = [
        "Parque do Ibirapuera",
        "Comedoria SP",
        "Pastel Yoka + Liberdade",
        "Embu das Artes",
        "Catavento",
        "Museu da Independência",
        "Cinema de Rua na Av. Paulista",
        "Museu Ema Klabin",
        "Parque Maeda",
        "Bario Bar",
        "Roller Dance"
    ];

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];

    document.getElementById("resultado").textContent = sorteado;
}
