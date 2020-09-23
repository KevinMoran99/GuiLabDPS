import { Component, OnInit } from '@angular/core';

//Service
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: UserService) { }

  ngOnInit(): void {
  }

}
