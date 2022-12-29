import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm";

@Entity('order')
export class Order extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id!:string

    @Column({type:"numeric"})
     priceAll!:number

    @CreateDateColumn()
    createDate!:Date


}