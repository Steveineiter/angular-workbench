# angular-workbench

https://www.youtube.com/watch?v=oUmVFHlwZsI
https://github.com/AhsanAyaz/angular-in-90ish

## General Inforamtion

- Framework for Single Page Apps (SPA)
- Built and used by Google
- Large community

### Advantages

- Fast development
- Fast code generation (CLI)
- Unit-test ready
- Opinionated (makes it **easy to switch teams/companies**)
- Reusability

### Angular VS React

- Framework VS library
- CLI VS no CLI
- All incuded VS need to install additional packages
- Opinionated VS Unopinionated

## Theory

- We have Components, Services, Directive, Pipes, Data-Binding, Event Handlers, Http Module, Form Module, Routing, Animations, Testing and Building.
- In src/index.html the top level component will be rendered.
- src/main.ts creates the angular application using the app component.
- All things we see are components, Often a hirarchy like AppComponent - Header Component
- We have **components** (like header, counter, ...) and **pages** (like home, todos), **pages a pretty much our routes**. Also index which in most cases just "points" to our home page.

## Practice

### Installation

- npm install -g @angular/cli
- ng --version
- ng new project-name --dry-run (to test it)
- ng new project-name --inline-style --inline-template (some config values)

### Components

- Used as building blocks for our pages.
- Can be provided in single providers by using providers.

#### Creating with

- ng g c header (short form)
- ng generate component header (full form)

Or in nested directory

- ng g c components/header

To create HomeComponent

- ng g c home

### Data Binding

- Works with signal key word / is more modern approach.
- We could use var = "foo" as well, aka traditional way. BUT signals are highly encouraged.
- Signals will be used in the future / are more future proofe.
- If we want pass something to other component we need to allow that.
- If we always want something, we can use .required() keyword.

### Event Listeners

- "keyup", "keydown" etc keyword inside of input tag and pass a handler

### Routing

- Browser only loads bundles related to the route, the user has accessed. Eg if we go to the home page, it will only load the home page. This makes it fast tho.
- We have a RouterOutlet, which is the routing manager for home and todos.
- If we just use routes we have no single page feeling, aka it does reload each time we enter localhost/todos or localhost. If we add RouterLink in header for example, it wont reload anymore.

### Services

- used if we want to encapsulate data and make http calls or any task that is not related directly to data rendering (opinion of instructor).
- Different to components by having a Injectable decorator instead of Component decorator.
- This services can be injected in other places (inject keyword). Eg we inject data from service into component.
- We often want this together with **custom types** as in model/todo.type.ts
- @for look powerful to render all elements in list. We do this in HTML of todos component.
  - Here we should track by id if we have one, this improves performance by quite a lot.
- Service returns sometimes an obseravble (eg new implemenation from todo items using HTTP / API)

#### Create services

- ng g service services/todos

#### HTTP calls with service

- provide HTTP module/providers in app config using provideHttpClient()
- Inject the HttpClient service
- Use http methods

### Directives

- Allows to add additional bevaior to elements in our Angular applications.
- Examples: Components, Attribute directives, Strucutral directives
- Nice if we have conditionals, eg showing a p tag with loading only while actually loading.
  - here NgIF is nice, it will completely remove element from the DOM not only hide it which is nice.
  - also we can use the build int @if command which is even nicer.
- Also nice if we have toggles eg in a todo lsit if we want to style differently if a item is selected or not.

#### Create an directive

- ng g directive directives/highlight-completed-todo

### Angular pipes

- Used to transform data right in our template NOT in TS files.
- There are a few pipes out of the box, eg | titelcase, | AsyncPipe, ...
- **This is really cool uwu**, also great for flexibility.
- We pretty much only have to change the created transofrm method to make the pipe work.
- Also **really cool** how simple the search thing works :o

#### Create a filter pipe

- ng g pipe pipes/filter-todos

## General notes

- If we create a style inside a component Angular makes sure that the style keeps in the component. It does that by adding a specific attricute to it.
- Each of our components have their own html and CSS files. I like this actually.

### CSS

- he likes to use BEM terminology for naming CSS classes (block, elment, modifier)

## Useful tools / extension

- For chromium the `Angular DevTools` is nice to see more (adds an Angular tab on inspect)
- For VSC Angular Language Service
