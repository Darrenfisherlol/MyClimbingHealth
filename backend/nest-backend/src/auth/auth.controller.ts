import {
    Body,
    Controller,
    Post,
    Get,
    HttpCode,
    HttpStatus,
    Request,
    UseGuards
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    // - https://docs.nestjs.com/security/authentication
    // have a return DTO and not string any
    //
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
