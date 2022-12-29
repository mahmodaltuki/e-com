import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm";

@Entity('category')
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id!:string

    @Column()
    categoryName!:string

    @Column()
    description!:string

    @CreateDateColumn()
    createDate!:Date


}