import {  IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Produto } from "../../Poduto/entities/Produtos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_usuario' })
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    public nome: string;

    @IsEmail()
    @Column({ length: 255, nullable: false })
    public usuario: string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({ length: 255, nullable: false })
    public senha: string;

    @Column({ length: 5000 })
    public foto: string;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[];
}