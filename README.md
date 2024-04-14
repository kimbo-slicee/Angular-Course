# Angular <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width="50px" height="50px" style="position:relative; bottom: -10px"   /> Course 👨‍🏫 For Beginners 🐐

[//]: # (<p> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg" /></p>)

!['Kimbo-Slice'](https://img.shields.io/badge/Slicee-kimbo?style=plastic&logo=hackaday&label=By%20Dev%20Kimbo&labelColor=%23800080%09&color=%09%23000000
)
!['Angular Badge'](https://img.shields.io/badge/build-Course-For?style=plastic&logo=angular&logoColor=%23FF0000&label=Angular&labelColor=%23000000&color=%23FF0000
)
![''](https://img.shields.io/badge/Wanted-Wanted?style=plastic&label=%F0%9F%91%82%20Feedback&labelColor=%20rgb(255%2C%20105%2C%20180)
)

# What 🤔 is  Angular <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width="50px" height="50px" style="position:relative; bottom: -10px"   />
<p>Angular is a JavaScript <span style="color: gold"> FrameWork</span>
which allows us to create <span style="color: gold"> Single page Applications</span>(SAP).<br>
<span style="font-weight: bold">what is A FrameWork  📌</span>   </br>
A FrameWork is like a platform for developing software it can have pre-defined classes
and functions that can be re-used to add several functionalities,
which otherwise we would have to write from scratch by our own </br> 
<span style="font-weight: bold">what is Single Page Application (SAP) 📌</span></br>
A single page application is a web application,which has only one HTML page. When we 
navigate around , only the content of that page changes . the page itself never changes
Advantage of SAP.
Since we are using JavaScript to change the content of the page it is much Faster , 
Here we are not reaching out to the server to request a new place of HTML data every time we navigate to a different URL
</p>

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
> **1: Install Node.js**
> *Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside a web browser. It is built on Chrome's V8 JavaScript engine and is designed for executing server-side scripts. 
> Node.js enables developers to use JavaScript for server-side scripting, creating command-line tools, and building back-end applications, making it a popular choice for building scalable and high-performance web applications*
>> **2:Install npm (Node Package Manager)**
>> *is a package manager for the Node.js runtime environment. It is the default package manager for Node.js and is bundled with it. npm allows developers to easily install, share, and manage Node.js modules and libraries, making it easier to build and share JavaScript code*
>>> **3: Install command-line interface (CLI)**
>>> *is a text-based user interface for interacting with a computer system or software application. It allows users to enter commands using a keyboard, and the system or application will execute those commands and return the results in text form. CLIs are commonly used in software development, system administration, and network administration. They provide a powerful and flexible way to interact with complex systems and automate tasks* 

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

### Angular files and folder structure
!["Angular_Folders"](src/assets/Angular%20files%20and%20folder%20structure.png)
When you build an Angular application, the Angular CLI (Command Line Interface) or other build tools generate several files that are included in the index.html file during runtime. Let's go through the files you mentioned:

- runtime.js: This file contains the code necessary for bootstrapping and running the Angular application at runtime. It includes the runtime environment and Angular's runtime compiler.
- polyfills.js: This file contains polyfills, which are code snippets that provide modern functionality on older browsers that may not support certain features. Angular applications often include polyfills to ensure compatibility with a wide range of browsers.
- styles.js: This file typically includes the styles (CSS) of your Angular application. It contains the compiled styles from your components and global styles.
- vendor.js: This file contains the code from third-party libraries and dependencies used by your Angular application. It includes the Angular framework itself and any other external modules or libraries.
- main.js: This is the main entry point of your Angular application. It usually includes the code responsible for bootstrapping the Angular module, setting up the application environment, and initializing the component tree.
###  Bootstrapping Angular Application
In Angular, bootstrapping refers to the process of initializing and running an Angular application. 
It involves loading the root module of the application which mostly is app.module.ts and then compiling and launching the component tree.
In other words when an Angular application is started, the Angular framework reads the main.ts file, which contains the bootstrap code, and it loads the specified module (AppModule).
The framework then processes the metadata defined in AppModule and initializes the application accordingly. 
The main file responsible for bootstrapping an Angular application is typically named main.ts or main.js.
>**Note: 📌**
> Angular Project: Angular CLI saves the compile Angular application in the memory 
> and directly start it.
> ng serve: If we make any changes to our Angular app,Angular CLI will recompile and update the file 
> Webpack: Angular CLI uses Webpack to travers through our Angular app and it bundles js and other files into one or more bundles then Angular CLI also injects the bundled JavaScript and CSS files in the index.html 
