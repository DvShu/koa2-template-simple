const router = new require('koa-router')();

router.get('/index', async (ctx) => {
  ctx.body = 'router -- Hello World!!!';
});

module.exports = router;
