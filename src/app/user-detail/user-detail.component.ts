import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUserEntity;

  constructor(
    private readonly  activatedRoute: ActivatedRoute,
    private readonly  usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      p => {
        const id = p.get('id');
        const idNumber = parseInt(id, 10);
        this.usersService.getUserById(idNumber).subscribe(
          u => this.user = u,
          e => console.error(e));
      }
    );
  }

}
