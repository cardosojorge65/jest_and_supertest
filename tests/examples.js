// ### Exemplo passando header e autenticação com auth
describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .auth('username', 'password')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });


// ### Exemplo de POST
describe('POST /users', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/users')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });
  });