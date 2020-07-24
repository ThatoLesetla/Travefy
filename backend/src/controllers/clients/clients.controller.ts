import { clientDTO } from './../../models/DTOs/clientDTO';
import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { Client } from '../../models/interface/client-interface';
import { ClientService } from '../../services/client/client.service';

@Controller('clients')
export class ClientsController {

    constructor(private clientService: ClientService) {}
    
    @Get()
    async findAll(): Promise<Client[]> {
        return await this.clientService.findAll();
    }

    // To retrieve One Client
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.clientService.findOne(id);
    }

    // To add Clients
    @Post()
    create(@Body() client: clientDTO) {
        return this.clientService.create(client);
    }
    // To Delete Clients
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.clientService.delete(id);
    }

    // To Update Client
    @Put(':id')
    update(@Param('id') id: string, @Body() client: clientDTO) {
       return this.clientService.update(id, client);
    }
}
