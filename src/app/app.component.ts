import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NgTemplateOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    isLoggedIn: boolean=false;
    username:string='user'
    login(){
        this.isLoggedIn=!this.isLoggedIn
    }

}
