import {Component} from '@angular/core';

import {NgForOf} from "@angular/common";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {RouterOutlet} from "@angular/router";

 @Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
     imports: [
         NgForOf,
         HeaderComponent,
         FooterComponent,
         RouterOutlet
     ],
    styleUrl: './app.component.css'
})

export class AppComponent {

 }
