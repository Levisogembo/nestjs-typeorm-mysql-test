import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from '../services/users/users.service';
import { User } from '../../typeorm/entities/User';
import { createUserDto } from '../dtos/createUser.dtos';
import { updateUserDto } from '../dtos/updateUser.dtos';

// @Resolver(() => User)
// export class UsersResolver {
//   constructor(private readonly usersService: UsersService) {}

//   @Query(() => [User])
//   async users() {
//     return this.usersService.fetchUsers();
//   }

//   @Query(() => User)
//   async user(@Args('id', { type: () => Int }) id: number) {
//     return this.usersService.fetchUserById(id);
//   }

//   @Mutation(() => User)
//   async createUser(@Args('createUserInput') createUserDto: createUserDto) {
//     return this.usersService.createUsers(createUserDto);
//   }

//   @Mutation(() => User)
//   async updateUser(
//     @Args('id', { type: () => Int }) id: number,
//     @Args('updateUserInput') updateUserDto: updateUserDto,
//   ) {
//     return this.usersService.updateUser(id, updateUserDto);
//   }

//   @Mutation(() => User)
//   async removeUser(@Args('id', { type: () => Int }) id: number) {
//     return this.usersService.deleteUser(id);
//   }
// } 