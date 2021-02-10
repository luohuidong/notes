Code Notes

## 备忘

部署使用 GitHub WebHook + Jenkins + docker 的方式，步骤：

1. 提交代码，GitHub WebHook 触发 Jenkins 任务
2. npm install
3. docker-compose down
4. docker-compose up -d --build