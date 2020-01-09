import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Folder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Folder,parent=>parent.child)
    parent: Folder;

    @OneToMany(type => Folder, child => child.parent)
    child: Folder[];
}
