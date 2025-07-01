# angular-workbench

https://www.youtube.com/watch?v=oUmVFHlwZsI

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

## Practice

### Installation

- npm install -g @angular/cli
- ng --version
- ng new project-name --dry-run (to test it)
- ng new project-name --inline-style --inline-template (some config values)

### Creating Component

- ng g c header (short form)
- ng generate component header (full form)

Or in nested directory

- ng g c components/header

To create HomeComponent

- ng g c home

## General notes

- If we create a style inside a component Angular makes sure that the style keeps in the component. It does that by adding a specific attricute to it.
- Each of our components have their own html and CSS files. I like this actually.

## Useful tools / extension

- For chromium the `Angular DevTools` is nice to see more (adds an Angular tab on inspect)
- For VSC Angular Language Service
