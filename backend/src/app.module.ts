import { PackageModule } from './models/package.module';
import { ClientsModule } from './client.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Client } from './models/entities/client.entity';
import { Packages } from './models/entities/package.entity';
import { AuthModule } from './auth/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'travefy',
      entities: [Client, Packages],
      synchronize: true,
    }),
    ClientsModule,
    PackageModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
