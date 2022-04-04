import supertest from "supertest";
import app from "../../../app";
import { mockDatabase } from "../../../shared/utils/mockDb";
import { mockCreateClient } from "../../../shared/utils/mockTests";

const db = mockDatabase();

describe('createClient', () => {
  beforeAll(async () => {
    (await db).connect();
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });

  it('should return status 400 with invalid first_name', async () => {
    const { body } = await supertest(app)
      .post('/user/client/signup')
      .send({
        email: 'ecw@wvew.com',
        password: 'wvwevwvwev',
        first_name: '',
        last_name: 'Ramirez'
      })
      .expect(400);
    expect(body).toEqual({ message: 'ValidationError: First name is required', type: 'validation' });
  });

  it('should retrun status 201 when a client is created', async () => {
    const { body } = await supertest(app)
      .post('/user/client/signup')
      .send({
        email: 'pedro@gmail.com',
        password: '12345678',
        role: 2,
        first_name: 'Pedro',
        last_name: 'Ramirez'
      })
      .expect(201);
    expect(body).toEqual(mockCreateClient);
  });
});
