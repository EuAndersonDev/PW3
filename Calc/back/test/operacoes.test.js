const { Calcular } = require('../src/models/calcModel.js')

test('Soma de dois numeros positivos', ()=>{
    expect(Calcular("2+3").toBe('5'))
})