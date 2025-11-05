import { Body, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/typeorm/entities/Posts';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { createPostParams, createProfileParams, createUserParams, updateUserParams } from 'src/utils/types/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Posts) private postsRepository: Repository<Posts>,
    ) { }

    async fetchUsers() {
        return this.userRepository.find({ relations: ['profile','posts'] });
    }

    async createUsers(userDetails: createUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date()
        });
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, user: updateUserParams) {
        return this.userRepository.update({ id }, { ...user });
    }

    async deleteUser(id: number) {
        return this.userRepository.delete({ id });
    }

    async createUserProfile(id: number, userProfile: createProfileParams) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        const newProfile = this.profileRepository.create(userProfile);
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }

    async createUserPost(id: number, userPost: createPostParams) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }

        const newPost = this.postsRepository.create({ ...userPost, user });
        return await this.postsRepository.save(newPost);

    }
}
