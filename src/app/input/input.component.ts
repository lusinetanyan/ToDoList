import { Component, OnInit } from '@angular/core';
import {BindingService} from "../binding.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() : void {
    const element = document.getElementById('text');
    // @ts-ignore
    BindingService.input.push(element.value);
    BindingService.comments.push([]);
    BindingService.commentsOn.push(false);
    // @ts-ignore
    element.value = '';
  }

}
