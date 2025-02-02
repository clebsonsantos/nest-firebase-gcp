import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import('./config/initializer');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app;
}

export const serverless = functions.https.onRequest(async (req, res) => {
  const app = await bootstrap();
  app.getHttpAdapter().getInstance()(req, res);
});
