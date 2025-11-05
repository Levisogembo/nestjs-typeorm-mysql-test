import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//creating a one-to-one relationship
@Entity({name:'profle'})
export class Profile {
    @PrimaryGeneratedColumn({type:'bigint'})
    id: number

    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    idNum: number

    @Column()
    age: number

}