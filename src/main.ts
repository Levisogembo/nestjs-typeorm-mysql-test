import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  await app.listen(process.env.PORT ?? 3000,'0.0.0.0').then(()=>console.log('App is listening on port 3000'));
}
bootstrap();
