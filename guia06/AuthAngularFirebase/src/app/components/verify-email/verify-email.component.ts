import { Component, OnInit } from '@angular/core';

//Service
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService: UserService) { }

  ngOnInit(): void {
  }

}
