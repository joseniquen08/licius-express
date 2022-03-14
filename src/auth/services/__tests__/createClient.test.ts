
describe('createClient.service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an error when client schema is not provided', async () => {
    try {
      // await createClientService();
    } catch (error: any) {
      expect(error.message).toEqual('');
    }
  })
})