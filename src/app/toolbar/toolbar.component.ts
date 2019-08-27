import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  navItems: Object[] = [
    {title: 'Home', icon: 'home', link: '/home'},
    {title: 'About', icon: 'help', link: '/about'},
    {title: 'Services', icon: 'question_answer', link: '/services'},
    {title: 'Contact', icon: 'question_answer', link: '/contact'},
    {title: 'Reviews', icon: 'question_answer', link: '/reviews'},
    {title: 'FAQ', icon: 'question_answer', link: '/faq'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
