import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { PhysicalTherapistModule } from './physical-therapist/physical-therapist.module';
import { WorkoutPlanModule } from './workout-plan/workout-plan.module';
import { WorkoutModule } from './workout/workout.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { validateEnv } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      validate: validateEnv,
    }),
    // migrations  https://typeorm.io/docs/migrations/why/
    // https://docs.nestjs.com/recipes/sql-typeorm
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST', { infer: true }),
        port: config.get<number>('DATABASE_PORT', { infer: true }),
        username: config.get<string>('DATABASE_USER', { infer: true }),
        password: config.get<string>('DATABASE_PASSWORD', { infer: true }),
        database: config.get<string>('DATABASE_NAME', { infer: true }),
        autoLoadEntities: true,
        synchronize: config.get<boolean>('DATABASE_SYNCHRONIZE', {
          infer: true,
        }),
      }),
    }),
    PatientModule,
    PhysicalTherapistModule,
    WorkoutPlanModule,
    WorkoutModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
