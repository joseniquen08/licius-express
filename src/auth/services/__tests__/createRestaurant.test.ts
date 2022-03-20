import supertest from "supertest";
import app from "../../../app";
import { mockDatabase } from "../../../shared/utils/mockDb";
import { mockCreateRestaurant } from "../../../shared/utils/mockTests";

const db = mockDatabase();

describe('createClient', () => {
  beforeAll(async () => {
    (await db).connect();
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });

  it('should return status 400 with invalid nombre_comercial', async () => {
    const { body } = await supertest(app)
      .post('/user/restaurant/signup')
      .send({
        email: 'restaurante@gmail.com',
        password: '12345678',
        razon_social: 'Sociedad Anónima',
        ruc: 12345678910,
        nombre_comercial: '',
        description: 'Restaurante de Pedrito',
        category_id: 1
      })
      .expect(400);
    expect(body).toEqual({ message: 'ValidationError: Nombre comercial is required', type: 'validation' });
  });

  it('should retrun status 201 when a restaurant is created', async () => {
    const { body } = await supertest(app)
      .post('/user/restaurant/signup')
      .send({
        email: 'restaurante@gmail.com',
        password: '12345678',
        role: 3,
        razon_social: 'Sociedad Anónima',
        ruc: 12345678910,
        nombre_comercial: 'Pedrito Rest',
        description: 'Restaurante de Pedrito',
        category_id: 1
      })
      .expect(201);
    expect(body).toEqual(mockCreateRestaurant);
  });
});