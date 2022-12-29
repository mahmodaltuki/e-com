import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm";
import { Length } from "class-validator";

@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id!:string

    @Column({unique:true})
    userName!:string

    @Column()
    @Length(10,1024)
    passWord!:string

    @Column()
    address!:string

    @CreateDateColumn()
    createDate!:Date


}