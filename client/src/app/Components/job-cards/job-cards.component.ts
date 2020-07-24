import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../Models/department.interface';

@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.scss']
})
export class JobCardsComponent implements OnInit {

  @Input() department: Department;
  constructor() { }

  ngOnInit() {
  }

}
