import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { Profile } from 'src/typeorm/entities/Profile';
import { Posts } from 'src/typeorm/entities/Posts';


@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Posts])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
