# Angular <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width="50px" height="50px" style="position:relative; bottom: -10px"   /> Course 👨‍🏫 For Beginners 🐐
<p> <img src="src/assets/migration-from-angularjs-to-angular.gif" /></p>

!['Kimbo-Slice'](https://img.shields.io/badge/Slicee-kimbo?style=plastic&logo=hackaday&label=By%20Dev%20Kimbo&labelColor=%23800080%09&color=%09%23000000
)
!['Angular Badge'](https://img.shields.io/badge/build-Course-For?style=plastic&logo=angular&logoColor=%23FF0000&label=Angular&labelColor=%23000000&color=%23FF0000
)
![''](https://img.shields.io/badge/Wanted-Wanted?style=plastic&label=%F0%9F%91%82%20Feedback&labelColor=%20rgb(255%2C%20105%2C%20180)
)

# What 🤔 is  Angular <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width="50px" height="50px" style="position:relative; bottom: -10px"   />
<p>Angular is a JavaScript <span style="color: gold"> FrameWork</span>
which allows us to create <span style="color: gold"> Single page Applications</span>(SAP).</p>

**what is A FrameWork**📌</br>
A FrameWork is like a platform for developing software it can have pre-defined classes
and functions that can be re-used to add several functionalities,
which otherwise we would have to write from scratch by our own </br> 
**what is Single Page 📄 Application(SAP)** 📌</br>
A single page application is a web application,which has only one HTML page. When we 
navigate around , only the content of that page changes . the page itself never changes
Advantage of SAP.
Since we are using JavaScript to change the content of the page it is much Faster , 
Here we are not reaching out to the server to request a new place of HTML data every time we navigate to a different URL

### why we're using angular framework 
Limitation f JavaScript /JQuery
- Vanilla JavaScript or jQuery code becomes hard to maintain and we will need a way to properly structure our apllication
- A lot of applications built using vanilla JavaScript or JQuery is hard to test 
- There are some functionalities which we will have to write from scratch when using JavaScript/JQuery
### Advantage of using Angular ✅
- Angular gives our apllication a clean and loosely coupled structure that is essay to understand and maintain   
- it brings a lot of utility code which can be re-used in a lot of application Especially . when dealing withe user navigation and browser history 
- Application build with Angular are more testable  
### Angular versioning and releases
<p> AngularJS is the first version of the Angular framework,
while Angular refers to the newer versions (Angular 2 and above). AngularJS is a JavaScript-based framework, 
while Angular uses TypeScript, a statically typed superset of JavaScript. 
Angular provides improved performance, scalability, and features compared to AngularJS.</p>

### Setup environment to work with angular
> **1: Install Node.js [Node.Js](https://nodejs.org/en)**
> *Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside a web browser. It is built on Chrome's V8 JavaScript engine and is designed for executing server-side scripts. 
> Node.js enables developers to use JavaScript for server-side scripting, creating command-line tools, and building back-end applications, making it a popular choice for building scalable and high-performance web applications*
>> **2:Install npm (Node Package Manager)[Downloading and installing Node.js and npm
](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)**
>> *is a package manager for the Node.js runtime environment. It is the default package manager for Node.js and is bundled with it. npm allows developers to easily install, share, and manage Node.js modules and libraries, making it easier to build and share JavaScript code*
>>> **3: Install command-line interface [AngularCLI](https://angular.io/cli)**
>>> *is a text-based user interface for interacting with a computer system or software application. It allows users to enter commands using a keyboard, and the system or application will execute those commands and return the results in text form. CLIs are commonly used in software development, system administration, and network administration.
> They provide a powerful and flexible way to interact with complex systems and automate tasks*
### Angular architecture patterns
Angular architecture patterns refer to the various design approaches and best practices for structuring Angular applications to achieve modularity, scalability, maintainability, and performance. Here are some common Angular architecture patterns
<details> 
<summary>Component-Based Architecture:</summary> 
Angular applications are typically built using a component-based architecture where the UI is broken down into reusable and encapsulated components.
Each component is responsible for a specific part of the UI and may contain its logic, templates, styles, and data.</details>
<details>
<summary>Module-Based Architecture</summary>
Angular applications are organized into modules, which help to divide the application into cohesive functional units.
Modules can be feature modules (containing related components, services, and other resources) or shared modules (containing reusable components, pipes, and directives).
</details>
<details>
<summary>Lazy Loading</summary>
Lazy loading is a technique used to improve the performance of Angular applications by <span style="color: chartreuse">loading modules and components asynchronously only when they are required.</span> 
Angular's RouterModule supports lazy loading for routing, allowing you to load modules on demand.
</details>
<details>
<summary>State Management</summary>
Managing application state is crucial for complex Angular applications. Various state management libraries and patterns can be used, such as RxJS, NgRx, Akita, or Angular's built-in services like BehaviorSubject and NgZone.
NgRx is a popular state management library for Angular that implements the Redux pattern using RxJS observables.
</details>
<details>
<summary>Service Layer</summary>
Angular services are used to encapsulate reusable logic, data, and functionality that can be shared across components.
<span style="color: brown; font-weight:bold"> Services should be lean and focused on a single responsibility</span> , following the principles of separation of concerns.
</details>
<details>
<summary>Routing and Navigation:</summary>
Angular's RouterModule provides powerful routing capabilities for navigating between different views or pages in a single-page application.
Properly configuring routing and navigation helps in organizing application structure and providing a seamless user experience.
</details>
<details>
<summary>Forms Handling</summary>
Angular provides support for both template-driven forms and reactive forms.
Depending on the complexity and requirements of the application, you can choose the appropriate form handling approach.

> Note 📍: the template-driven form used for simple forms and the logic of the form treated in the template but 
> the reactive forms they are using for complex forms such as login form and the of the form but in the component 
</details>
<details>
<summary>Error Handling and Logging</summary>
Implementing error handling and logging mechanisms is essential for debugging and maintaining Angular applications.
Angular's ErrorHandler interface can be used to handle errors globally, while logging libraries like Angular Logging Service can be used for logging.
</details>
<details>
<summary>Security:</summary>
Implementing security measures such as authentication, authorization, and protection against common vulnerabilities (e.g., cross-site scripting, cross-site request forgery) is important for Angular applications.
Angular provides built-in features like HttpInterceptor for intercepting HTTP requests and responses to implement authentication and authorization.
</details>
<details>
<summary>Testing</summary>
Writing tests is crucial for ensuring the reliability and maintainability of Angular applications.
Angular provides support for various types of testing, including unit tests, integration tests,
and end-to-end tests using tools like Jasmine, Karma, Protractor, and Angular Testing Library.
</details>

### Create a New Angular Project
```angular2html
ng new my-angular-app

```
### Angular files and folder structure
When you build an Angular application, the Angular CLI (Command Line Interface) or other build tools generate several files that are included in the index.html file during runtime. 
>Let's go through the files you mentioned:
>- runtime.js: This file contains the code necessary for bootstrapping and running the Angular application at runtime. It includes the runtime environment and Angular's runtime compiler.
>- polyfills.js: This file contains polyfills, which are code snippets that provide modern functionality on older browsers that may not support certain features. Angular applications often include polyfills to ensure compatibility with a wide range of browsers.
>- styles.js: This file typically includes the styles (CSS) of your Angular application. It contains the compiled styles from your components and global styles.
>- vendor.js: This file contains the code from third-party libraries and dependencies used by your Angular application. It includes the Angular framework itself and any other external modules or libraries.
>- main.js: This is the main entry point of your Angular application. It usually includes the code responsible for bootstrapping the Angular module, setting up the application environment, and initializing the component tree.
###  Bootstrapping Angular Application
In Angular, bootstrapping refers to the process of initializing 🚀 and running an Angular application. 
It involves loading 💱 the root module of the application which mostly is app.module.ts and then compiling and launching the component tree.
In other words when an Angular application is started, the Angular framework reads the main.ts file, which contains the bootstrap code, and it loads the specified module (AppModule).
The framework then processes the metadata defined in AppModule and initializes the application accordingly. 
The main file responsible for bootstrapping an Angular application is typically named main.ts or main.js.
```
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
>**Note: 📌**
> Angular Project: Angular CLI saves the compile Angular application in the memory and directly start it.
> ng serve: If we make any changes to our Angular app,Angular CLI will recompile and update the file 
> Webpack: Angular CLI uses Webpack to travers through our Angular app, and it bundles js and other files into one or more bundles then Angular CLI also injects the bundled JavaScript and CSS files in the index.html 
### Angular Modules 
In Angular, "modules" are a way to organize an application into cohesive blocks of functionality.
Angular applications are typically built using multiple modules, each serving a specific purpose.
Modules help in organizing the codebase, managing dependencies, and providing a clear structure to the application.<br/>
**There are two types of modules in Angular:**<br/>
**Root Module:** This is the main module of an Angular application, conventionally named AppModule. 
It is typically defined in the app.module.ts file. The root module bootstraps the application 
and contains references to other modules and components that are essential for the application to run.
```angular
// app.module.ts (Root Module)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
**Feature Modules**: These are additional modules created to encapsulate specific features or functionalities of the application. 
Feature modules are used to group related [components](README.md), [directives](), [pipes](), and [services]().
They help in making the application modular and maintainable by dividing it into smaller, manageable pieces.
```angular
// feature.module.ts (Feature Module)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }
```
### Angular Component
Angular is a component-based JavaScript Framework for building Client side App Components are the main building blocks for Angular applications. 
Component is a piece of user InterFace An Angular application is essentially a tree of Component the component can interact withe view Template
thanks to Data Angular Data 📊 Binding 🖇 Concept.
<br>
**Create Component without angular CLI:**
>- create TypeScript class and export it
>- Decorate the class withe @Component decorator and provide decorator Object Example ```{selector:"app-compoenent",
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'}```
>- Declare 📢 the Class in the main Module File <br>

**Creat component with Angular cli:**
```
ng generate component Component-Name
```
**Types of Component Selectors:**
- HtML-Tag : Selector === "component-Name"
- Attribute-Tag: Selector === "[component-Name]" in case of using this component as a [directives](directive) attribute
- Css-class or Css-id: selector === ".component-Name"or "#component-Name" <br>
>**Note:** Angular components are a subset of directives, always associated with a template

### What Is 🤔 Angular Data 📊 Binding 🖇 ?
There are various ways in which we can display data on the view. 
The process of displaying this data is data binding. Angular data binding is an essential and powerful aspect of software development.
It defines the communication between a component and its views. Data binding brings dynamism and interactivity to applications.

| Types of Data Binding | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                 way of data binding |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------:|
| Interpolation Binding | Interpolation is a procedure that allows the user to bind a value to the user interface element. Interpolation binds the data one-way, which means that data moves in one direction from the components to HTML elements.                                                                                                                                                                                                                                                           |                 One-WayData Binding |
| Property Binding      | Property binding is a one-way data binding mechanism that allows you to set the properties for HTML elements. It involves updating a property value in the component and binding the value to an HTML element in the same view.                                                                                                                                                                                                                                                     |                One_way Data Binding |
| Event Binding         | Event binding type is when information flows from the view to the component when an event is triggered. The event could be a mouse click or keypress. The view sends the data to update the component. Unsurprisingly,it is the exact opposite of property binding, where the data goes from the component to the view.                                                                                                                                                             |                One_way Data Binding |
| Attribute Binding     | Attribute binding in Angular helps you bind to HTML attributes of elements in your template. This can be useful when you want to dynamically update the appearance or behavior of an element based on some condition.                                                                                                                                                                                                                                                               |                One_way Data Binding |
| ngModel               | The ngModel directive makes this two-way data binding possible.When you use the ngModel directive, you specify a property of the scope as the value of the directive. This tells Angular to create a two-way binding between the property and the input control. Any changes to the control are automatically reflected in the model, and any changes to the model are automatically reflected in the contro.ngModel is the combination between propriety biding and event bundling | Two-way Data Binding Dat~~a Binding |
 
### Angular Directives 
In Angular, a directive is a class with a @Directive decorator. 
Directives add behavior to elements in the DOM (Document Object Model). 
They can modify the appearance or behavior of a DOM element, component, or another directive.<br>
>There are three types of directives in Angular:
>- **Component Directives:** These are the most common directives in Angular. They are directives with a template. 
When Angular encounters a component directive in the HTML, it renders the component along with its template.
>- **Attribute Directives:** These directives change the behavior or appearance of an element, component, or another directive. They are used as attributes within HTML tags.
>- **Structural Directives:** These directives change the DOM layout by adding or removing elements. They are preceded by an asterisk (*) in the HTML. 
>>**Note📌:** Angular provides some built-in directives like *ngIf, *ngFor, and *ngSwitchCase, but you can also create custom directives to encapsulate and reuse behavior across your application. 
##### how to create your own directive using angular CLI 
To create a custom directive in Angular, you can use the @Directive decorator. Here's a step-by-step guide to creating a custom directive:
1-Create a new directive using the Angular CLI:
```
ng generate directive myDirective
```
2-Define the directive:<br>
```
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ ]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```
>**Note:📌** In this example, the directive listens for mouse enter and mouse leave events on the host element and changes its background color accordingly.

3-Use the directive:<br>
You can now use the appMyDirective directive in any of your Angular components' templates.
```angular2html
<div appMyDirective>
  Hover over me to see the effect
</div>
```
4-Add the directive to your module:<br>
Don't forget to add the directive to the declarations array of your module.

### @Input : Custom Property Binding
Custom property Binding is when we bind properties of Component class to some TypeScript expression 
@Input(): This decorator allows a parent
component to pass data into a child component.
When you use @Input() to decorate a property in 
the child component, you make that property available
for binding from the parent component's template.Example:<br>
Child Component 
```
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
@Input() all:number=0;
@Input() inStack:number=0;
@Input() outOfStuck:number=0;
}
```
Parent Component 
```
import {Component} from '@angular/core'
import {Product} from "../../../models/products.model";
import {products} from "../../../models/ProducdsListe";
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {
  public productList:Product[]=products;
  public products_list_size:number=this.productList.length;
  public productInStaock:number=this.productList.filter(products=>products.is_in_inventory).length

}
```
Parent template 
```
<div class="container">
  <app-filter [all]="products_list_size" [inStack]="productInStaock" [outOfStuck]="products_list_size-productInStaock"  ></app-filter>
  <div class="row">
    <app-product *ngFor="let products of productList" [product]="products" class="col-md-4"></app-product>
    </div>
  </div>
```

### @Output: Custom Event Binding
In Angular, @Output is a decorator used in a child component to emit events to its parent component. 
It allows data to flow from the child component to the parent component.
### Template Reference Variable
A template reference variable is a variable which stores a reference to a DOM element Component or 
Directive on which it is used 
### @ViewChild decorator in Angular
The @ViewChild decorator is used to query and obtain a reference to DOM elements within a component.It returns the first matching element. 
The main difference between @ViewChild and template reference variables is that @ViewChild receive the 
reference of the element when the class loaded for the first time. In the case of template references,
we must use an event to receive the ref element.<br>
The @ViewChild decorator takes two properties:
- The first property is the element reference and it mandatory.
- The second optional argument of @ViewChild() is an object that takes two properties:
1. read: Use it to read different tokens from the queried elements.
2. static: Determines when the query is resolved. It takes two values, true or false.
TRUE: resolves the query when the view is initialized (before the first change detection) for the first time.
FALSE : resolves the query after every change detection Cycle .
>**Note** 📌:
> @ViewChild will always return the first matching element.
> For example, when we use @ViewChild with multiple input elements, 
> it will return the first element. Additionally, 
> we can use @ViewChild to pass the reference of the instance components, not only DOM elements.

```
  Example:
  @ViewChild(ComponentName or elementRef )properyName!:type;
```
### @ViewChildren decorator
It s same as @ViewChild but The viewChildren decorator is used to get a reference to the list of Dom element from the view template in the component class.
it returns all the matching element
ViewChildren return list of type  ![](QueryList<ElemementRef>) and the @ViewChildren is works after change detection
resolve and the second parameter ViewChildren there is just read property not like 
the view 
```
 @ViewChildren('inputElement')allInputs!:QueryList<ElementRef>
    onSubmit() {
    this.allInputs.forEach(ele=>{
    console.log(ele.nativeElement)
    })
    }
```
### ng-Templates
the ng-template is an Angular element which wrap an HTML snippet .this HTML snippet 📎 acts and can be used
Like a Template 🧾 and can be rendered in the DOM tree 🎄 and even we use this directive it will not be rendered directly in web page
that's why we have to use structure directives like *ngIf or *ngFor or there's specificness struclturl rectifier call 
ngTemplateOutlet directive and use the template reference variable for the ng-template<br>
```angular2html
<h1>Hello in my ReadMe</h1>
<!--Note: this HTML will not rendered in the browser why ? -->
<ng-template #ngTemplate>
    <h3>I'm here to Help u 🙌</h3>
    <P>If you can't explain it simply, you don't understand it well enough.</P>
</ng-template>
<div *ngTemplateOutlet="ngTemplate"><!--this ng-template will be rendered in this 👉 div --></div>
```
Use Cases Example 👇
```
<div *ngIf="isLoggedIn; else loginTemplate">
    <p>Welcome, {{ username }}!</p>
</div>
<ng-template #loginTemplate>
    <h3> you need to Login First</h3>
    <button class="" (click)="login()"  >Login🔐</button>
</ng-template>
```
### ng-Container 
The [ng-container](ng-container)
In Angular, ng-container is a special element provided by Angular that allows you to group multiple elements together without actually creating an additional element in the DOM.
It's a structural directive that is useful for situations where you need to apply structural directives like *ngIf, *ngFor, or *ngSwitch to multiple elements without adding an extra wrapper element.
it s like fragment in React. And the main idea of crating ng-container it s to allows us to use multiple structural directive without using a lot of divs
```angular2html
<h2>Learn Ng-template</h2>
<ng-template #template>
    <h3>this is a template</h3>
    <p>this is an example paragraph to understand ng-template</p>
</ng-template>
<!--the most use Case of ng-template-->
<ng-container *ngTemplateOutlet="template"></ng-container>
```
### ng-content
The <ng-content> element specifies where to project content inside a component template.
>>**Note:📌** when we use multiple ng-content all the content will replaced in the lase one so this why we need to add attribute select to ng-content to specify which element we want to replace 
### ---@ContentChilde:  
### ---@ContentChildren:
The @ContentChildren decorator is used to access a reference of all the DOM elements , 
Components or directives From the projected content in the child Component class based on a given selector
### Component Lifecycle in Angular 
When Angular encounters a component selector in the template 
(e.g., <app-my-component></app-my-component>), 
it first looks up the corresponding component class based on the selector name.
Once found, Angular creates a new instance of that component class using the class constructor. 
This constructor can be used to perform any initialization tasks required for the component to function, such as injecting dependencies.</br>
**component Life Cycle**:  </br>
1- When The Angular Application start,it first creates and renders the root component </br>
2- Then it creates and renders its children and their children. in this way it forms a tree of components </br>
3- Once Angular loads the Component,it starts the process of rendering the view To Do that it need to check the input properties evaluate the data bindings & expressions, render the projected content etc. </br>
>**Note:📌**
>When a constructor is called, by that time ,none of its input properties are updated and available to use 
> When a constructor is called, by that time the child component of that component are not yet construed
> Projected Contents are also not available by the time the constructor of a component
### Lifecycle Hooks in Angular
the Angular life cycle hooks are the methods that angular invokes on a directive or a component , as it creates,changes and destroys them<br>
**Change Detection** in Angular is a mechanism by which,angular Keeps the view template is in sync with the component class <br>
when change detection mechanism works ?
- Whenever the @input property of a component changes
- whenever a DOM event happens click or change
- Whenever a Timer events happens using setTimeOUt()/setInterval()
- Whenever an HTTP request is made
- 
| Hooks                 |                                                                                                                                                                                                                                                                             Description                                                                                                                                                                                                                                                                              |          InterFace Name |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|------------------------:|
| ngOnchange            |                                                                                                                                                                   The ngOnChanges hooks get executed at the start, when a new component is created and its input bound properties are updated.the ngOnChenges Hook also gets executes everytime the input bound properties of the component change                                                                                                                                                                   |           **OnChanges** |
| ngOnInit              |                                                                                                                                          Angular raises ngOnInit hook after it creates the component and update it s input properties, this hook is raised after ngOnChanges.the ngOnInit Hook is fired once during the first change detection cycle.After that,if the input proper changes this hook does not gets called                                                                                                                                           |              **OnInit** |
| ngDoCheck             |                                                                                                                                                                                                             Angular invokes ngDoCheck hook during every change detection cycle.This Hook is invoked even if there's no change in input bound properties                                                                                                                                                                                                              |             **DoCheck** |
| ngAfterContentInit    |                                                                             The ngAfterContent lifecycle hook is called after the components projected content has been fully initialized.Angular Update the properties decorated with @ContentChild & @ContentChildren decorator just before this hook is raised.this lifecycle hook gets called only once,during the first change detection cycle. After that,if the projected content changes this lifecycle hook will not get called                                                                             |    **AfterContentInit** |
| ngAfterContentChecked | The ngAfterContentChecked lifecycle hook is called during every change detection cycle after Angular has finished initializing and checking projected content. Angular raises this hook even if there is no projeted content in the component The ngAfterContentInit hook is Called after the projected content is initialized NgAfterContentChecked is called whenever the projected content is initialized , checked & update. <br/>**Note**:the ngAfterContentInit and ngAfterContentChecked are only hook Component these hooks are not available for directives | **AfterContentChecked** |
| ngAfterViewInit       |  the ngAfterViewInit is Called after the Components View template and all its child Component View templates are fully initialized Angular also Updates the properties decorated @ViewChild and @ViewChildren before raising this hook. By the time hook gets called for a component, all the lifecycle hook methods of child components and directive are completely processed and child components are completely ready.<br/>**Note**:the ngAfterContentInit and ngAfterContentChecked are only hook Component these hooks are not available for directives        |       **AfterViewInit** |
| ngAfterViewChecked    |                                                                                                                                                       Angular fires ngAfterViewChecked hook after it checks and updates the components View template and all it s child components view templates this hook is called during the first change detection cycle ,after that during every change detection cycle.                                                                                                                                                       |    **AfterViewChecked** |
| ngOnDestroy           |                                                                                                                   angular fires NgOnDestroy lifeCycle hook just before the component or the directive is destroyed or removed from the DOM.<br/> *Note*:this Hook is the Create place to do some cleanup work like unsubscribe from am observable or dutch event handler etc ...,  as this hook is called right before the component is destroyed                                                                                                                    |           **OnDestroy** |

>**Note📌**: from all this hooks theirs just four hooks that's we can use them in a directive class they are [NgOnChange,NgOnInit,NgDoCheck,ngOnDestroy] 
### what is Renderer2 
Allows us to manipulate the DOM without accessing the DOM directly,By providing a Layer of abstraction between the DOM element and component code 
- Angular Keeps the component and the view in sync using templates . data binding and change detection etc .All of them are bypassed when we update the DOM directly 
- the DOM manipulation works only in browser .You will not be able to use your app in other platform like web workers,servers for server-side rendering , desktop or mobile apps etc. where there is no browser   
- The Dome APS's does not sanitize the data. hence it is possible to inject a script , thereby opening our app an easy target for XSS injection attacks  
```
export class BackgroundColorDirective implements OnInit{

constructor (private elementRef:ElementRef,
private rendererTwo:Renderer2) { }

ngOnInit(): void {
this.rendererTwo.setStyle(this.elementRef.nativeElement,'backgroundColor','black')
}

    }
```
### @HostListener in Angular
In Angular, HostListener is a decorator that's used to subscribe to events of the host element in the directive or component. It allows you to listen to events such as mouseenter, mouseleave, 
### @HostBinding 
The @HostBinding decorator binds a host elements property to a property of a directive or a component class 
### What is Service in Angular
In Angular, services are a way to organize and share code across different parts of your application.
They are regular TypeScript classes with a specific purpose, such as fetching data from a server, logging, or managing application state.
Services in Angular are usually singleton objects, meaning that there is only one instance of a service in the application.
Services allow you to keep your components lean and focused on their specific tasks, while business logic, data manipulation,
and communication with the server are handled by services<br>.
**Advantages**
- Services allows us to re-use a piece of code in multiple components wherever it is required . in this way we avoid repeating a piece of code 
- it allows us to separate business logic From UI logic in a service class, IN this way it provides separation of concern
- We are able to use untie testing easy to test ths business logic written in a service class separately without creating a component.Testing and debugging is easier with services   
**How To create a Service**

**What is Dependency Injection**
A dependency is a relationship between two software components where
one component relies on the other component to work properly<br> 
Why we need Dependency injection 🙄
- without dependency injection a class is tightly coupled with it s dependency this make a class non-flexible Any change in dependency force us to change the class implementation 
- it makes testing of class difficult. Because if the dependency changes the class has to change. And when the class changes the unit test mock code also has to change                  
- Dependency injection or DI Keep the code flexible , testable , and mutable
- Classes can inherit external logic without knowing how to create it 
- Dependency injection benefits components , Directive and pipe
> **Note 📌** When we provide a service on multiple components each component get it s own instance of that service <br>
> **Dependency Override** : When we provide a dependency on a component and also provide a dependency on it s child component . child component dependency instance will override it s parent component dependency instance Child component provider override the instance if parent component provider <br>
> **Model injector**: We can also inject a service from Module class in that Case Same instance of the dependency will be available throughout the Angular application.In this way we implement singleton pattern where a single instance is shared throughout the application  

