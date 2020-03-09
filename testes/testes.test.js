const index = require('./teste.index');




test('Recebe um DDD de Origem, um DDD de Destino, tempo em minutos, a Escolha do Plano retorna o Valor com Plano e Valor sem Plano - plano FaleMais30', () => {
    expect(index(11, 16, 20, 30)).toEqual({ valorPlano: 0, valorSemPlano: 38 })
})



test('Recebe um DDD de Origem, um DDD de Destino, tempo em minutos, a Escolha do Plano retorna o Valor com Plano e Valor sem Plano - plano FaleMais60', () => {
    expect(index(11, 17, 80, 60)).toEqual({ valorPlano: 37.400000000000006, valorSemPlano: 136 })
})



test('Recebe um DDD de Origem, um DDD de Destino, tempo em minutos, a Escolha do Plano retorna o Valor com Plano e Valor sem Plano - plano FaleMais120', () => {
    expect(index(18, 11, 200, 120)).toEqual({ valorPlano: 167.20000000000002, valorSemPlano: 380 })
})