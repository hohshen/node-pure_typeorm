import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => User, user => user.group)
    @JoinTable()
    member: User[];//fk(one to many內含inner join)
}