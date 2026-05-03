import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

function corsOriginOption(
  raw: string,
  nodeEnv: string,
): boolean | string | RegExp | (string | RegExp)[] {
  const trimmed = raw.trim();
  if (trimmed) {
    return trimmed
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (nodeEnv === 'production') {
    return false;
  }
  // react default or backned nest defaulty
  return ['http://localhost:5173', 'http://localhost:3000'];
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const nodeEnv =
    configService.get<string>('NODE_ENV', { infer: true }) ?? 'development';
  const corsRaw =
    configService.get<string>('CORS_ORIGINS', { infer: true }) ?? '';
  app.enableCors({
    origin: corsOriginOption(corsRaw, nodeEnv),
    credentials: true,
  });
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Swagger API test for Climber')
    .setDescription(
      'Ascent Climbing Health or Health Climb or whatever this is called',
    )
    .setVersion('1.0')
    .addBearerAuth()
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

  const port = configService.get<number>('PORT', { infer: true }) ?? 3000;
  await app.listen(port);
}
bootstrap();
