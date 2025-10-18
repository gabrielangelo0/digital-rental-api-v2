// Iremos realizar testes na rota de carros, GET, POST, PUT e DELETE

// Para a rota GET deverá retornar um codigo 200 e um array de carros
const request = require('supertest');
const app = require('../app');

// DESCRIBE: Agrupa os testes relacionados à rota de carros
// test: Define cada teste individualmente

describe('ROTAS DE CARROS', () => {
    test('GET /cars - Deve retornar um código 200 e um array de carros', async () => {
        const responseCars = await request(app).get('/cars');

        expect(responseCars.statusCode).toBe(200);
        expect(Array.isArray(responseCars.body)).toBe(true);
        return
    });

    test('POST /cars - Deve criar um novo carro e retornar código 201', async () => {
        const newCarData = {
            name: 'Teste Carro',
            image: 'http://example.com/car.jpg',
            price: 50000,
            category: 'SUV',
            transmission: 'Automatic',
            fuel: 'Gasoline',
            seats: 5,
            available: true,
        };

        const response = await request(app)
            .post('/cars')
            .send(newCarData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newCarData.name);
    });
})