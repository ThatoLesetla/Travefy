import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../models/entities/client.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private clientRepository: Repository<Client>,
    ) {}

    async findAll(): Promise<Client[]> {
        return await this.clientRepository.find();
    }

    findOne(id: string): Promise<Client> {
        return this.clientRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.clientRepository.delete(id);
    }

    async create(client: Client): Promise<Client> {
        return await this.clientRepository.save(client);
    } 

    async update(id: string, client: Client): Promise<Client> {
        return await this.clientRepository.save(client);
    }

    async findByEmail(clientEmail: string): Promise<any> {
        return await this.clientRepository.find({ where: { email: clientEmail}});
    }
}
