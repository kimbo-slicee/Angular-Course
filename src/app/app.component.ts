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
export class AppComponent implements OnChanges,OnInit{
    userName!:string;
    constructor() {
        console.log("constructor")
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnchange Change detction cycle is run ")
    }

    ngOnInit(): void {
        console.log("ngOnInit")
    }


    showName(el:HTMLInputElement) {
        this.userName=el.value;
    }
}
