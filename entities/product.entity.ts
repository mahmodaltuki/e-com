import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm";

@Entity('product')
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id!:string

    @Column()
    productName!:string

    @Column()
    description!:string

    @Column({type:'numeric'})
    price!:number

    @CreateDateColumn()
    createDate!:Date


}