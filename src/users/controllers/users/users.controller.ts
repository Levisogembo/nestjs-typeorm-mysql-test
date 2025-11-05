import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { createPostDto } from 'src/users/dtos/createPost.dtos';
import { createUserDto } from 'src/users/dtos/createUser.dtos';
import { createProfileDto } from 'src/users/dtos/createUserProfile.dtos';
import { updateUserDto } from 'src/users/dtos/updateUser.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getUsers(){
        const users = await this.userService.fetchUsers()
        let hits = users.length
        return [{hits:hits,users}]
    }

    @Post('create')
    createUSer(@Body() userDetails: createUserDto){
        this.userService.createUsers(userDetails)
        return {message:'User Created Successfully'}
    }
    
    @Patch(':id')
    async updateUsersbyId(@Param('id',ParseIntPipe) id:number, @Body() updateuser: updateUserDto){
       await this.userService.updateUser(id, updateuser)
       return({
        status: HttpStatus.ACCEPTED,
        msg: 'Updated Successfuly'
       }) 
    }
    
    @Delete(':id')
    async deleteUsersbyId(@Param('id',ParseIntPipe) id:number){
        await this.userService.deleteUser(id)
        return({
         status: HttpStatus.ACCEPTED,
         msg: 'Deleted Successfuly'
        })
    }

      //creating a user profile
      @Post(':id/profiles')
      createUserProfile(@Param('id', ParseIntPipe) id: number,@Body()userProfile: createProfileDto){
        return this.userService.createUserProfile(id,userProfile)
      }

       //creating a user post
      @Post(':id/posts')
      createUserPost(@Param('id', ParseIntPipe) id: number,@Body() userPost: createPostDto){
        return this.userService.createUserPost(id,userPost)
      }
      
}
