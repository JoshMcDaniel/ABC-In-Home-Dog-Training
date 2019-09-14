import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialIcons = [
    {
      socialLinks: '',
      imageLink: './assets/footer/social/facebook_icon.png'
    },
    {
      socialLinks: '',
      imageLink: './assets/footer/social/twitter_icon.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
