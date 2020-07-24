import { PackageService } from '../../services/package.service';
import { Component, OnInit } from '@angular/core';
import { Package } from '../../models/package';
import { MatDialog } from '@angular/material/dialog';
import { PackageEditModalComponent } from './package-edit-modal/package-edit-modal.component';

export interface DialogData {
  packageID: number
}

@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.css']
})

export class TravelPackageComponent implements OnInit {

  packages: Package[];
  constructor(private packageService: PackageService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.packageService.findAll().subscribe(data => {
      this.packages = data;
      console.log(data);
    });
  }

  openDialog(packageID: number): void {
    const dialogRef = this.dialog.open(PackageEditModalComponent, {
      width: '550px',
      data: { packageID: packageID }
    });
  }

}
