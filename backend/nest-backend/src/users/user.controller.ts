import { Body, Controller, Get, Patch, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  me(@Request() req: { user: { sub: number } }) {
    return this.userService.findOneId(req.user.sub);
  }

  @Patch('me')
  updateMe(
    @Request() req: { user: { sub: number } },
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.update(req.user.sub, dto);
  }
}
