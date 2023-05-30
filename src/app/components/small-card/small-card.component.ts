import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {

  @Input() id: number = 0;
  @Input() photoCover: string = '';
  @Input() alt: string = '';

  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';

  @Input() verMais: boolean = true;
  @Input() router: string = '';


  constructor() {}

  ngOnInit(): void {}
}
