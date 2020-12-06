import {Component, OnInit, EventEmitter, Output} from '@angular/core';

interface iSearch {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchLink = '';

  linksArray: iSearch[] = [
    { title: "home", link: "home" },
    { title: "about", link: "about" },
    { title: "contact", link: "contact"},
    { title: "register", link: "user.create" }

  ];

  filter(): iSearch[] {
    const result: iSearch[] = [];
    for (const option of this.linksArray) {
      if (option.title.includes(this.searchLink)) {
        result.push(option);
      }
    }
    return result;
  }

  @Output()
  clicked = new EventEmitter<void>();

}
