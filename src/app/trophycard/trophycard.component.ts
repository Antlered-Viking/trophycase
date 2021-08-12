import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-trophycard',
  templateUrl: './trophycard.component.html',
  styleUrls: ['./trophycard.component.scss'],
})
export class TrophycardComponent implements OnInit {
  @Input() thumbURL!: string;
  @Input() title!: string;
  @Input() author!: string;

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  activeMenuIcon: string;

  // menuOpen: boolean = false;

  constructor() {
    this.activeMenuIcon = 'more_vert';
  }

  ngOnInit(): void {
  }

  menuToggle() {
    this.activeMenuIcon = this.trigger.menuOpen
      ? 'close'
      : 'more_vert';
  }

  clearMenu(){
    this.activeMenuIcon='more_vert';
  }
}
