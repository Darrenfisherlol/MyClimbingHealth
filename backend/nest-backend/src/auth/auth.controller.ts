import {
    Body,
    Controller,
    Post,
    Get,
    HttpCode,
    HttpStatus,
    Request,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { SignInDto } from './dto/signIn.dto';
import { RegisterPtDto } from './dto/register-pt.dto';
import { RegisterPatientDto } from './dto/register-patient.dto';
import { LinkPtDto } from './dto/link-pt.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('register/pt')
    registerPt(@Body() dto: RegisterPtDto) {
        return this.authService.registerPt(dto);
    }

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('register/patient')
    registerPatient(@Body() dto: RegisterPatientDto) {
        return this.authService.registerPatient(dto);
    }

    @Post('link-pt')
    linkPt(
        @Request() req: { user: { sub: number } },
        @Body() dto: LinkPtDto,
    ) {
        return this.authService.linkTherapist(req.user.sub, dto.ptCode);
    }

    @Get('profile')
    getProfile(@Request() req: { user: { sub: number } }) {
        return this.authService.getProfile(req.user.sub);
    }
}
