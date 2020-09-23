import { Component, OnInit } from '@angular/core';

//Service
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: UserService) { }

  ngOnInit(): void {
  }

}
