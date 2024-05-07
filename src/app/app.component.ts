import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf, NgTemplateOutlet} from "@angular/common";
import {ParentComponent} from "./components/parent/parent.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NgTemplateOutlet, NgIf, ParentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    userName!:string;
    showName(el:HTMLInputElement) {
        this.userName=el.value;
    }
}
