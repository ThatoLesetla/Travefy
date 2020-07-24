import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Packages {

    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    location: string;
    
    @Column()
    hotelID: Number;
    
    @Column()
    duration: Number;
    
    @Column()
    price: Number;
    
    @Column()
    currency: Number;
    
    
    @Column()
    flightID: Number;
    
    @Column()
    transportationID: string;
    
    @Column()
    discountAmnt: Number;
}