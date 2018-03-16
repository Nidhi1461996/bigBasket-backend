const server = require('../../src/server');


// const routee = '/';
describe('test the server', () => {
  test('checking the  status code to be 200', (done) => {
    const req = {
      method: 'GET',
      url: '/inventory',
    };
    server.inject(req, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

// const routee = '/'
