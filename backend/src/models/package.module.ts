import { PackagesController } from '../controllers/packages/packages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PackageService } from '../services/package/package.service';
import { Packages } from './entities/package.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Packages])],
    controllers: [PackagesController],
    providers: [PackageService],
})
export class PackageModule { }
