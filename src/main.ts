import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, // 允许所有来源，或者指定具体域名，如 'http://example.com'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的HTTP方法
    allowedHeaders: 'Content-Type, X-Requested-With, Authorization', // 允许的请求头
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true, // 允许携带凭证信息（cookies）
    maxAge: 3600, // 预检请求的缓存时间（秒）
  });
  await app.listen(3000);
}
bootstrap();
