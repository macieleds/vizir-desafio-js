var tarifas = [{
        dddOrigem: 11,
        dddDestino: 16,
        valor: 1.90
    },
    {
        dddOrigem: 16,
        dddDestino: 11,
        valor: 2.90
    },
    {
        dddOrigem: 11,
        dddDestino: 17,
        valor: 1.70
    },
    {
        dddOrigem: 17,
        dddDestino: 11,
        valor: 2.70
    },
    {
        dddOrigem: 11,
        dddDestino: 18,
        valor: 0.90
    },
    {
        dddOrigem: 18,
        dddDestino: 11,
        valor: 1.90
    },

]

var planos = [{
        nomePlano: 'FaleMais120',
        minutos: 120,
    },
    {
        nomePlano: 'FaleMais60',
        minutos: 60,
    },
    {
        nomePlano: 'FaleMais30',
        minutos: 30,
    },
]


document.getElementById('dddo').onchange = function() {
    var dddOrigem = document.getElementById("dddo").value;
    if (dddOrigem == '11') {
        document.getElementById("ddddes").value = '16';
        document.getElementById("ddddes").disabled = false;
    } else {
        document.getElementById("ddddes").value = '11';
        document.getElementById("ddddes").disabled = true;
    }
}


document.getElementById('calcular').onclick = function calcular() {

    var plano = document.getElementById("planos").value;
    var dddOrigem = document.getElementById("dddo").value;
    var dddDestino = document.getElementById("ddddes").value;
    var tempo = document.getElementById("tempo").value;
    var resCalculo = calcula(dddOrigem, dddDestino, tempo, plano);
    document.getElementById("valorSemPlano").value = resCalculo.valorSemPlano.toFixed(2);
    document.getElementById("valorPlano").value = resCalculo.valorPlano.toFixed(2);

};



function calcula(d1, d2, minutos, planoId) {
    const dddValor = tarifas.find(a => a.dddOrigem == d1 && a.dddDestino == d2).valor
    const plano = planos.find(a => a.minutos == planoId)
    const planoMinutos = plano ? plano.minutos : 30
    const minutosRestante = (minutos - planoMinutos)
    return { valorPlano: (minutosRestante > 0 ? minutosRestante : 0) * dddValor * 1.1, valorSemPlano: minutos * dddValor }
}