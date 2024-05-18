import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClassDirectiveDirective} from "./directive/class-directive.directive";
import {NgStyle, NgSwitch, NgSwitchCase} from "@angular/common";
import {StyleDirectiveDirective} from "./directive/style-directive.directive";
import {NgifDirectiveDirective} from "./directive/ngif-directive.directive";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ClassDirectiveDirective, NgStyle, StyleDirectiveDirective, NgifDirectiveDirective, NgSwitch, NgSwitchCase, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    switch:string="Contacts"


}
