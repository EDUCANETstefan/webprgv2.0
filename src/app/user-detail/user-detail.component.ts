import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUserEntity;
  newUsername: string;
  newPassword: string;

  constructor(
    private readonly  activatedRoute: ActivatedRoute,
    private readonly  usersService: UsersService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      p => {
        const id = p.get('id');
        const idNumber = parseInt(id, 10);
        this.usersService.getUserById(idNumber).subscribe(
          u => {this.user = u;
            console.debug(u);
          },
          e => console.error(e));

      }
    );
  }

  clickedEdit() {
    this.usersService.editUser(this.user.id, this.newUsername, this.newPassword)
      .subscribe(
        u => this.router.navigateByUrl("/home")
    );
    console.log(this.user.username, this.user.password);
  }


}
