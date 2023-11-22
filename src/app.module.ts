import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { EmailService } from './email/email.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, EmailService],
  imports: [UsersModule],
})
export class AppModule {}
