import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  controllers: [UsersModule],
  providers: [],
  imports: [EmailModule],
})
export class AppModule {}
