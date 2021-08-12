import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  showEth: boolean;
  showPoly: boolean;

  constructor() {
    this.showEth = true;
    this.showPoly=true;
  }

  ngOnInit(): void {}
}
