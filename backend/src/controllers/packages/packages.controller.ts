import { Controller, Get, Put, Delete, Param, Body, Post } from '@nestjs/common';
import { PackageService} from '../../services/package/package.service';
import { PackageInterface } from '../../models/interface/package.interface';
import { PackageDTO } from '../../models/DTOs/packageDTO';

@Controller('packages')
export class PackagesController {

    constructor(private packageService: PackageService) {}
    @Get()
    async findAll(): Promise<PackageInterface[]> {
        return await this.packageService.findAll();
    }

    // To retrieve One packageData
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.packageService.findOne(id);
    }

    // To add packageDatas
    @Post()
    create(@Body() packageData: PackageDTO) {
        return this.packageService.create(packageData);
    }
    // To Delete packageDatas
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.packageService.delete(id);
    }

    // To Update packageData
    @Put(':id')
    update(@Param('id') id: string, @Body() packageData: PackageDTO) {
        return this.packageService.update(id, packageData);
    }
}
