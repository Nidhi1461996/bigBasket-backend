const server = require('../../src/server');


// const routee = '/';
describe('test the server', () => {
  test('checking the  status code to be 200 of the test route', (done) => {
    const req = {
      method: 'GET',
      url: '/',
    };
    server.inject(req, (response) => {
      console.log(response.result);
      expect(response.result).toBe('server is running');
      done();
    });
  });
});
