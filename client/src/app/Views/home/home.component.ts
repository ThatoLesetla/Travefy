import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Services/department.service';
import { Department } from '../../Models/department.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  departments: any;
  constructor(private departmentService: DepartmentService) {
     this.departmentService.getDepartments().subscribe(data => {
       console.log('Passed data is' + data);
       this.departments = data;
     });
  }

  ngOnInit() {
  }

}
