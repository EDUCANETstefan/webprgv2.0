import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = '';
  text = '';
  email = '';

  sendConsole() {
    console.log(this.email);
    console.log(this.name);
    console.log(this.text);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
