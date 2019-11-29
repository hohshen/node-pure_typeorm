import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToMany } from "typeorm";
import { Heart } from "./Heart";
import { Eye } from "./Eye";
import { Group } from "./Group";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToOne(type => Heart,heart=>heart.user)//(對過去,反回來)
    heart: Heart;

    @OneToMany(type => Eye, eye => eye.user)//(對過去,反回來)
    eye: Eye[];

    @ManyToMany(type => Group, group => group.member)//(對過去,反回來)
    group: Group[];
}
