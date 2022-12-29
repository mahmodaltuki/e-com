import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm";

@Entity('cart')
export class Cart extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type:"numeric"})
     priceAll!:number

    @CreateDateColumn()
    createDate!:Date


}