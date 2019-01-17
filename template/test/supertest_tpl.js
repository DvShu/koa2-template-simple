const supertest = require('supertest');
const req = supertest(require('../baseurl'));

describe('api', function () {

  describe('http', function () {

    it('get', function (done) {
      req.get('/index').query({id: 1, name: '2'}).expect(200, done);
    });

    it('post_form', function (done) {
      req.post('/p').send('id=2&name="zhangsan"').expect(200, done);
    });

    it('post_json', function (done) {
      req.post('/p1').send({id: 1, name: '2'}).expect(200, done);
    });

    it('multipart', (done) => {
      req.post('/multipart')
        .field('name', 'my awesome avatar')
        .attach('avatar', 'test/fixtures/avatar.jpg')
        .expect(200, done);
    })

  });

});
