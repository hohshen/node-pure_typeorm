import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from "typeorm";
import { User } from "./User";

@Entity()
export class Eye {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'varchar',
        length:255,
        unique:true,
        default: 'null',
        nullable: true,
    })
    sn:string;

    @Column()
    name: string;

    @ManyToOne(type => User,user=>user.eye)
    user: User;//fk(one to many內含inner join)
}
