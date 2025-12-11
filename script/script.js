function sortear() {
            const resultado = Math.random() < 0.5 
                ? "vamos almoçar 11h30" 
                : "vamos almoçar 13h";
            
            document.getElementById("resultado").textContent = resultado;
        }