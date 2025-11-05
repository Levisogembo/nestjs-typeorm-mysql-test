import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './Profile';
import { Posts } from './Posts';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  username: string;

  
  @Column()
  email: string;

 
  @Column()
  password: string;


  @Column()
  createdAt: Date;

  
  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn()
  profile: Profile;

  
  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];
}
