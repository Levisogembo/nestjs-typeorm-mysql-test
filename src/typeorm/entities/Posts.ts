import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    title: string

    @Column()
    description:string

    @ManyToOne(()=> User,(user)=>user.posts)
    user: User
}