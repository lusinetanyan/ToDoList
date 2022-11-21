import {Component, ViewChild} from '@angular/core';
import {TextComponent} from "./text/text.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  @ViewChild('textComponent')
  public childComponent! : TextComponent;
  clicked : boolean = false;


  buttonClick() {
    this.clicked = !this.clicked;
  }
}
