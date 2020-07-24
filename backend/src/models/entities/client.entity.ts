import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    clientID: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    address: string

    @Column()
    postalCode: number;

    @Column()
    password: string;

    @Column()
    updateDate: Date;
}