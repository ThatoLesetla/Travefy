import { ClientsController } from './controllers/clients/clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClientService } from './services/client/client.service';
import { Client } from './models/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientsModule {}
