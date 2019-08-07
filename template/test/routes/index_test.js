const test = require('ava');
const Koa = require('koa');
const request = require('supertest');
const bodyParser = require('koa-bodyparser');
const route = require('../../routes/index');

function makeApp () {
  let app = new Koa();
  app.use(bodyParser());
  app.use(route.routes()).use(route.allowedMethods());
  return app.listen();
}

test('login_username_error', async t => {
  t.plan(2);
  const res = await request(makeApp()).post('/login').send('username=xthj$admin1&password=xthj$user123');
  t.is(res.status, 200);
  t.is(res.body.code, 1001);
});

test('login_password_error', async t => {
  t.plan(2);
  const res = await request(makeApp()).post('/login').send('username=xthj$admin&password=xthj$user1231');
  t.is(res.status, 200);
  t.is(res.body.code, 1002);
});

test('login_success', async t => {
  t.plan(2);
  const res = await request(makeApp()).post('/login').send('username=xthj$admin&password=xthj$user123');
  t.is(res.status, 200);
  t.is(res.body.code, 1);
});
