import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Heart {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => User,user=>user.heart)
    @JoinColumn()//fk
    user: User;
}
