import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { PhysicalTherapistModule } from '../physical-therapist/physical-therapist.module';
import { PatientModule } from '../patient/patient.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import type { SignOptions } from 'jsonwebtoken';

@Module({
  imports: [
    UserModule,
    PhysicalTherapistModule,
    PatientModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const signOptions: SignOptions = {
          expiresIn: (config.get<string>('JWT_EXPIRES_IN') ??
            '7d') as SignOptions['expiresIn'],
        };
        return {
          secret: config.getOrThrow<string>('JWT_SECRET'),
          signOptions,
        };
      },
    }),
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: APP_GUARD, useExisting: AuthGuard },
  ],
  controllers: [AuthController],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}
