import { mockDatabase } from "../../../shared/utils/mockDb";

const db = mockDatabase();

describe('createClient', () => {
  beforeAll(async () => {
    (await db).connect();
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });

  it('should return status 400 with invalid email', async () => {
    
    // const { body } = await supertest(app)
    //   .post('/user/client/signup')
    //   .send({
    //     email: 'ecw@wvew.com',
    //     password: 'wvwevwvwev',
    //     first_name: '',
    //     last_name: 'Ramirez'
    //   })
    //   .expect(400);
    // expect(body).toEqual({ message: 'ValidationError: First name is required', type: 'validation' });
  })
});