function calcularBanhoTosa() {

    let nome = document.getElementById("nome").value;
    let porte = document.getElementById("porte").value;
    let servico = document.getElementById("servico").value;

    let valor = 0;

    if (porte === "pequeno") {

        if (servico === "banho") {
            valor = 30;
        } else if (servico === "tosa") {
            valor = 35;
        } else if (servico === "completo") {
            valor = 70;
        }

    } else if (porte === "medio") {

        if (servico === "banho") {
            valor = 40;
        } else if (servico === "tosa") {
            valor = 45;
        } else if (servico === "completo") {
            valor = 90;
        }

    } else if (porte === "grande") {

        if (servico === "banho") {
            valor = 50;
        } else if (servico === "tosa") {
            valor = 55;
        } else if (servico === "completo") {
            valor = 120;
        }
    }

    if (nome === "" || porte === "" || servico === "") {

        document.getElementById("resultado").innerHTML =
            "Preencha todos os campos.";

        return;
    }

    document.getElementById("resultado").innerHTML =
        "Animal: " + nome +
        "<br> Valor do serviço: R$ " + valor.toFixed(2);
}


function verificarEstoque() {

    let produtoSelecionado =
        document.querySelector('input[name="produto"]:checked');

    let quantidade =
        Number(document.getElementById("quantidade").value);

    if (produtoSelecionado === null || quantidade < 0) {

        document.getElementById("resultadoEstoque").innerHTML =
            "Escolha uma ração e informe a quantidade atual.";

        return;
    }

    let produto = produtoSelecionado.value;

    let minimo = 0;

    if (produto === "Ração Premium") {

        minimo = 40;

    } else if (produto === "Ração Simples") {

        minimo = 50;

    } else if (produto === "Ração Comum") {

        minimo = 100;
    }

    if (quantidade < minimo) {

        document.getElementById("resultadoEstoque").innerHTML =
            "Produto: " + produto +
            "<br>Quantidade atual: " + quantidade +
            "<br>Quantidade mínima: " + minimo +
            "<br><strong>Estoque baixo!</strong> É necessário repor o produto.";

    } else {

        document.getElementById("resultadoEstoque").innerHTML =
            "Produto: " + produto +
            "<br>Quantidade atual: " + quantidade +
            "<br>Quantidade mínima: " + minimo +
            "<br><strong>Estoque normal!</strong> O produto não precisa ser reposto.";
    }

}

function calcularVacinacao() {

    let nome = document.getElementById("nomeVacina").value;
    let peso = Number(document.getElementById("pesoAnimal").value);
    let quantidade = Number(document.getElementById("quantidadeVacinas").value);
    let valor = Number(document.getElementById("valorVacina").value);

    if (nome === "" || peso <= 0 || quantidade <= 0 || valor <= 0) {

        document.getElementById("resultadoVacinacao").innerHTML =
            "Preencha todos os campos corretamente.";

        return;
    }

    let total = quantidade * valor;

    document.getElementById("resultadoVacinacao").innerHTML =
        "Animal: " + nome +
        "<br>Peso: " + peso + " kg" +
        "<br>Quantidade de vacinas: " + quantidade +
        "<br>Valor de cada vacina: R$ " + valor.toFixed(2) +
        "<br><strong>Valor total: R$ " + total.toFixed(2) + "</strong>";
}

function calcularRanking() {

    let banho = Number(document.getElementById("banho").value);
    let tosa = Number(document.getElementById("tosa").value);
    let vacina = Number(document.getElementById("vacina").value);
    let consulta = Number(document.getElementById("consulta").value);

    let servicos = [
        { nome: "Banho", quantidade: banho },
        { nome: "Tosa", quantidade: tosa },
        { nome: "Vacinação", quantidade: vacina },
        { nome: "Consulta", quantidade: consulta }
    ];

    servicos.sort(function(a, b) {
        return b.quantidade - a.quantidade;
    });

    let resultado = "<strong>Ranking:</strong><br><br>";

    for (let i = 0; i < servicos.length; i++) {

        resultado += (i + 1) + "º lugar - " +
            servicos[i].nome + ": " +
            servicos[i].quantidade +
            " atendimentos<br>";
    }

    document.getElementById("resultadoRanking").innerHTML = resultado;
}

function calcularMedia() {

    let segunda = Number(document.getElementById("segunda").value);
    let terca = Number(document.getElementById("terca").value);
    let quarta = Number(document.getElementById("quarta").value);
    let quinta = Number(document.getElementById("quinta").value);
    let sexta = Number(document.getElementById("sexta").value);

    let total = segunda + terca + quarta + quinta + sexta;

    let media = total / 5;

    document.getElementById("resultadoMedia").innerHTML =
        "Total de atendimentos na semana: " + total +
        "<br>Média de atendimentos por dia: " +
        media.toFixed(2);
}