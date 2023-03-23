import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'DM-Solution';
  constructor(private translate: TranslateService) {}
  // header
  // header
  activeMenu: boolean = false;
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }
  // lang
  lang: string = 'en';
  setLang = async (lang: any) => {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  };
  services: any = [
    {
      name: 'SOCIAL MEDIA MARKETING',
      icon: 'meta.svg',
      dis: `Connect with your audience and build your brand through effective social media marketing strategies tailored to your business.`,
    },
    {
      name: 'Search engine optimization',
      icon: 'search.svg',
      dis: `Improve your online visibility and drive more traffic to your website with our proven SEO strategies.`,
    },
    {
      name: 'google ads',
      icon: 'google.svg',
      dis: `Drive targeted traffic to your website and increase conversions with our expertly crafted Google Ads campaigns.`,
    },
    {
      name: 'EMAIL MARKETING',
      icon: 'mail.png',
      dis: `Reach your customers directly and increase engagement with personalized email marketing campaigns.`,
    },
  ];
  links: any = [
    {
      name: 'Phone',
      title: '1-514-348-2584',
      icon: 'phone.svg',
      link: `tel:15143482584`,
    },
    {
      name: 'email',
      title: 'nicolas@dmsolutions.pro',
      icon: 'mail.png',
      link: `mailto:nicolas@dmsolutions.pro`,
    },
    {
      name: 'facebook',
      title: '@dm solution',
      icon: 'facebook.svg',
      link: `https://www.facebook.com/profile.php?id=100089912816271`,
    },
    {
      name: 'instagram',
      title: 'nicolas.doucetoo',
      icon: 'insegram.svg',
      link: `https://instagram.com/nicolas.doucet00?igshid=YmMyMTA2M2Y=`,
    },
  ];
  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });
    this.setLang(localStorage.getItem('lang') || 'en');
  }
}
