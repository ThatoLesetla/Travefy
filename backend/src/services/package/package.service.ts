import { Packages } from './../../models/entities/package.entity';
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PackageInterface } from '../../models/interface/package.interface';
import { Repository } from 'typeorm';
@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(Packages)
        private packageRepo: Repository<Packages>,
    ){}

    async findAll(): Promise<PackageInterface[]> {
        return this.packageRepo.find();
    }

    async findOne(id: string): Promise<PackageInterface> {
        return this.packageRepo.findOne(id);
    }

    async create(packageData: PackageInterface): Promise<PackageInterface> {
        return this.packageRepo.save(packageData);
    }

    async update(id: string, packageData: PackageInterface) {
        return this.packageRepo.save(packageData);
    }

    async delete(id: string) {
        return this.packageRepo.delete(id);
    }
}
