import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bulletin-text',
  templateUrl: './bulletin.text.component.html',
  styleUrls: ['./bulletin.text.component.css']
})
export class BulletinTextComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
