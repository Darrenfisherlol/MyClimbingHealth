import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TeaModule } from './tea/tea.module';
import { TeaController } from './tea/tea.controller';
import { TeaService } from './tea/tea.service';


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
    TeaModule
  ],
  controllers: [
    AppController,
    ],
  providers: [
    AppService,
    ],
})
export class AppModule {}
