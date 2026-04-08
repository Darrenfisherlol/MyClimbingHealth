import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Swagger API test for Climber')
      .setDescription('Ascent Climbing Health or Health Climb or whatever this is called')
      .setVersion('1.0')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Mass assignment protection
  // https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe
  // then add DTO logic https://github.com/typestack/class-validator#validation-decorators
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
      }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
