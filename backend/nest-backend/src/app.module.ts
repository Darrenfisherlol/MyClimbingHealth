import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// tester
import { TeaModule } from './tea/tea.module';

import { PatientModule } from './patient/patient.module';
import { PhysicalTherapistModule } from './physical-therapist/physical-therapist.module';
import { WorkoutPlanModule } from './workout-plan/workout-plan.module';
import { WorkoutModule } from './workout/workout.module';



@Module({

  imports: [
    // migrations  https://typeorm.io/docs/migrations/why/
    // https://docs.nestjs.com/recipes/sql-typeorm
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Climb',
      // schema: 'climb',
      autoLoadEntities: true,
      // Setting synchronize: true shouldn't be used in production
      // - otherwise you can lose production data.
      synchronize: true,
    }),
    TeaModule,
    PatientModule,
    PhysicalTherapistModule,
    WorkoutPlanModule,
    WorkoutModule
  ],
  controllers: [
    AppController,
    ],
  providers: [
    AppService,
    ],
})
export class AppModule {}
