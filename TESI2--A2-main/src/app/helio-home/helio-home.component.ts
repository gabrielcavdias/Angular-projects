import { Component, OnInit } from '@angular/core';
import { HelioTasksService } from '../helio-tasks.service';

@Component({
  selector: 'app-helio-home',
  templateUrl: './helio-home.component.html',
  styleUrls: ['./helio-home.component.css'],
})
export class HelioHomeComponent implements OnInit {
  constructor(public tasksService: HelioTasksService) {}

  ngOnInit() {}
}
