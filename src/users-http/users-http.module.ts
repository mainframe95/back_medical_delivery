import { Module } from '@nestjs/common';
import { UserController } from 'src/user/user.controller';
import { UsersModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [UsersModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UsersHttpModule { }
