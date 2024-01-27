import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas 02-Template-Strings', () => {
    test('getSaludo debe de retornar hola fernando', () => { 
        const name = 'LUIS';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
     })
});