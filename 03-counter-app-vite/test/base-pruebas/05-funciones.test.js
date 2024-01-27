import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-Funciones', () => {
    test('Get user debe retornar un objetos', () => {
        const testUser = {

            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(testUser).toStrictEqual(user); // si son objetos se debe usar toequal toStrictEqual no funciona el toBe


    });
 
    test('GetUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Luis'
        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        };

        expect(testUsuarioActivo).toStrictEqual(userActivo);
    })

});