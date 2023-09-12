// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("One dollar should be 147.02 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(5)).toBe(735.1); //1 dollar son 147.06 yenes, entonces 5 dollars deberian ser = (5 * 147.02)
})

test("One yen should be 0.00544312 pounds", function(){
     const { fromYenToPound } = require('./app.js')
     expect(fromYenToPound(5)).toBe(0.0272156); //1 yen son 0.00544312 pounds, entonces 5 yenes deberian ser = (5 * 0.00544312)
})