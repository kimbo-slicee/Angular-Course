import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {CoursesComponent} from "./component/courses/courses.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'About',component:AboutComponent},
    {path:'Contact',component:ContactComponent},
    {path:'Courses',component:CoursesComponent},
    {path:"**",component:NotFoundComponent}
];
