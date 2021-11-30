import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slide = 1;
  thisClass = 'rigth';
  maxSlideNumber = 3;
  constructor() { }

  services: any[] = [
    {
      Name: 'Website design and development',
      Description: 'Boost your online presence with our clean, stunning and functional websites & portals',
      Value: 'Adventure',
      Class: ['active'],
      Icon: 'language'
    },
    {
      Name: 'Mobile App Design and Development ',
      Description: 'We develop feature-rich and scalable mobile applications. we specialize in both Android & IOS',
      Value: 'Adventure',
      Class: ['active'],
      Icon: 'phone_android'
    },
    {
      Name: 'E-commerce Development',
      Description: 'Our custom e-commerce development services will help you sell your physical or digital products online.',
      Value: 'Adventure',
      Class: ['active'],
      Icon: 'shopping_bag'
    },
    {
      Name: 'Hosting Services',
      Description: 'We provide fast and reliable domain registration services, hosting of websites, business emails, apps and software.',
      Value: 'Adventure',
      Class: ['active'],
      Icon: 'gite'
    },

  ];

  ngOnInit() {
  }
  changeSlide(i: number) {


    if ((this.slide + i) > this.maxSlideNumber) {
      this.slide = 1;
      return;
    }
    if ((this.slide + i) < 1) {
      this.slide = this.maxSlideNumber;
      return;
    }
    this.slide += i;

    if (i == 1) {
      this.thisClass = 'rigth';
    }
    if (i == -1) {
      this.thisClass = 'left';
    }
  }

  goto(service) { }
}
