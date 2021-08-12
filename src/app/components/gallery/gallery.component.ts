import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  showEth: boolean;
  showPoly: boolean;

  ethShowcase: any[];
  polyShowcase: any[];

  constructor() {
    this.showEth = true;
    this.showPoly = true;
    this.ethShowcase = [
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      },
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      },
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      },
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      }
    ];
    this.polyShowcase = [
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      },
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      },
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      },
      {
        thumbURL:
          'https://lh3.googleusercontent.com/7MhlCBpslKYY22r3XSUIpD0vCKMzbfQB4qfDVXZ6Ibz4okQ4UHiw840oU4XW_ETy0xuCVo8yP7XGZCzwZrrKxK50VG5yQDmEnrQn',
        title: 'Eighteen',
        author: 'lonelysince67',
      }
    ];
  }

  ngOnInit(): void {}
}
