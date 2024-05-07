import {Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [
        FormsModule,
        ChildComponent,
    ],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css'
})
export class ParentComponent implements OnChanges, DoCheck, OnInit {
    constructor() {
        console.log("constructor is here ")
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnchange is here ")

    }

    ngDoCheck(): void {
        console.log("ngDoCheck is Here ")
    }

 @Input()name!:string;
 @ViewChild('btn')btn!:ElementRef;
    ngOnInit() {
        /*that's will given an error why ??
        * bcs when NgOnInit called the view template it s not created yet and will return underfunded
        * */
        // console.log(this.btn.nativeElement.innerHTML)
        console.log("ngOnInit is here ")
    }
}
