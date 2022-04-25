const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de ajolonauta", () =>{
    test('Caso de prueba 1: Creación de objeto', () =>{
        //Aquí puedes usar el código como lo quieras utilizar
        const woopa = new Ajolonauta('Woopa')

        //Aquí se valida el resultado esperado
        expect(woopa.name).toBe('Woopa')
    });
})