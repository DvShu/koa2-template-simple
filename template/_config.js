/**
 * 应用的配置文件
 * @author: haoran.shu
 * @datetime: {{ datetime }}
 */
module.exports = {
  port: 3000, // 应用启动端口号{{if mongo}}
  mongo: {
    {{ mongo[0] }}: '{{ mongo[1] }}'
  }{{/if}}
};
