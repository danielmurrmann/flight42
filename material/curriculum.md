# Training 100: Design Systems and Angular Component Libraries

## Chapter 110: Motivation and Foundation

### 111 Motivation for Design Systems and Component Libraries

Discover the importance of design systems and component libraries in modern frontend development. Learn how they promote consistency, reusability, and scalability across applications, enabling teams to deliver cohesive user experiences and accelerate development cycles. Learn about the splitting a UI into blocks and elements and how to arrange them.

**Practical Exercise:**  
Review the UI requirements for the sample flight management project and identify opportunities for reusable components and design patterns.

---

### 112 Monorepos as a Foundation for Component Libraries

Understand why a monorepo is the preferred approach for distributing Angular component libraries. Learn how Nx enables scalable development, simplifies dependency management, and streamlines collaboration across teams.

**Practical Exercise:**  
Create a new Nx workspace using the Nx CLI, get familiar with creating libraries. Create a design-system library a design-system-elements and a design-system-blocks library. Finally create a first button and text-box component and a playground app for the design-system.

---

### 113 Structuring Projects in Nx

Explore recommended project structure for component libraries within an Nx monorepo. Learn how to organize and distribute your component libraries within a monorepo.

**Practical Exercise:**  
Create a proper library structure for your component library within a NX monorepo. Create a folder for the flight domain and create two more libraries for the design system elements and blocks within this domain.

---

###  114 Configuring Linting and Storybook Tools

Set up linting and Storybook tools in your Nx workspace to ensure code quality, and effective component development. Learn how to configure ESLint for code standards and Storybook for interactive component development and visualization.

**Practical Exercise:**  
Configure ESLint and Storybook for your Angular library.

## Chapter 120: Architectural Considerations for Component Libraries

### 121 Design Tokens and Theming

Learn how to use design tokens to centralize and standardize colors, typography, spacing, and other design decisions. Understand how theming enables flexible customization and consistent branding across applications. Learn how to apply standardized colors, typography, and spacing to ensure consistency with your design system.

**Practical Exercise:**  
Define a set of design tokens and implement basic theming support in your component library. Style the button component using the design tokens.

---

### 122 Custom Form Controls 

Learn how to create custom form controls in Angular that integrate seamlessly with template driven and reactive forms. Understand the key concepts of ControlValueAccessor and how to implement it in your components.

**Practical Exercise:**  
Implement a custom text box component that used the ControlValueAccessor interface to integrate with Angular teplate driven and reactive forms. Implement a dropdwon component that used FormControlValue to integrate with signal based forms.

### 123 Components based on Content Projection

Learn how to build components using content projection effectively.

**Practical Exercise:**  
Implement or review a data table component using content projection approach.

---

### 124 Components based on Configuration

Learn how to build components using configuration via inputs effectively.

**Practical Exercise:**  
Implement or review an app bar component using the configuration approach.

---

### 125 Extending Components: Content Projection vs. Configuration Approach

Compare content projection with configuration via inputs. Examine strategies for extending existing components that utilize either content projection or configuration via inputs. Understand how each approach impacts extensibility, flexibility, and maintainability.

**Practical Exercise:**  
Extend the previously built data table and app bar components to support additional features using both approaches. Compare the ease of extension and the impact on maintainability.

---

### 126 Avoiding God Components

Recognize the pitfalls of creating overly complex "god components" that handle too many responsibilities. Learn best practices for splitting logic and UI into manageable, testable pieces.

**Practical Exercise:**  
Identify a god component in your project and think about how to refactor it into smaller, purpose-driven components.

---

### 127 Component Composition and Reusability

Explore strategies for composing components into UI blocks to maximize reusability and maintainability. Understand how to build reuseable complex domain aware components that are composed out of generic reuseable components.

**Practical Exercise:**  
Compose a flight criteria and a flight list component out of existing elements.

---

### 128 Building New Views Using Layout Components and UI Blocks

Learn how to assemble new views by composing layout components and UI blocks. Understand the process of leveraging existing design system elements to rapidly build consistent, maintainable and repeatable views.

**Practical Exercise:**  
Implement a generic search layout and combine it with existing UI blocks.

## Chapter 130: Storybook for Component Development and Documentation

### 131 Isolated Component Interaction and Development

Explore how Storybook enables isolated development and testing of components outside the main application context. Learn to use the Storybook controls addon to dynamically adjust component inputs and the actions addon to capture and visualize component events.

**Practical Exercise:**  
Connect the flight criteria component with Storybook's controls and actions addons to allow interactive input changes and event tracking.

---

### 132 Using Storybook for Component Documentation

Learn how Storybook serves as a living documentation platform for your components. Explore different documentation options, including inline component documentation using JSDoc comments, MDX files for rich, interactive documentation, and Doc Blocks for structured property and usage descriptions. Discover best practices for documenting components making it easier for teams to understand and adopt your design system.

**Practical Exercise:**  
Create a documentation for design tokens using MDX, create a documentation for the text box component using inline JSDoc comments and document the Flight Criteria component in Storybook using dock blocks.

---

### 133 Automatic Component Interactions

Discover how Storybook supports automatic interaction testing and simulation. Learn to use Storybook's interaction addons to simulate user flows to bring a component into a specific target state.

**Practical Exercise:**  
Set up an automatic interaction to bring the flight criteria component into specific target state.

## Chapter 140: Component Testing Strategies

> **Repo Preparation:** Create one test of each kind as a sample for the users.

---

### 141 Overview of Component Testing Approaches

Understand the importance of robust component testing in component libraries. Compare different testing strategies and approaches.

**Practical Exercise:**  
Review the sample flight management project and identify which testing strategies are best suited for different components and scenarios.

---

### 142 Angular Component Testing Tools

Explore the main tools for testing Angular components: TestBed, Storybook Interaction Tests, Cypress (component and e2e), and Playwright (e2e). Learn how each tool provides different environments and approaches for testing component logic, templates, and user interactions, both in isolation and within realistic user flows. Understand how to integrate these tools into your CI/CD pipeline for automated testing.

**Practical Exercise:**  
Write unit tests for the flight criteria component using Angular's TestBed. Add Storybook interaction tests for user flows. Create Cypress and Playwright e2e tests, running all in CI/CD. 

---

### 143 Comparing Angular Component Testing Tools

Compare different testing tools: TestBed, Storybook Interaction Tests, Cypress (component and e2e), and Playwright e2e. Discuss their advantages and disadvantages to help select the best fit for different scenarios.

**Practical Exercise:**  
Create a comparison table for the components in the sample workspace with the pros and cons of for different testing tools.

---

# Training 200: Advanced Angular - Architectures for Enterprise Applications

---

> **Repo Preparation:** Create a nicely structured domain for `Flights` and an app providing the features of the `Flights` domain. Remove all not needed stuff from the Design Systems Training. Create a sample backend with a proper REST API for the flight management domain.

---

## Chapter 210: Structuring Large Angular Applications

---

> **Repo Preparation:** Add the `shell` app

---

### 211 Nx Monorepos for Scalable Application Management

Learn how Nx empowers teams to manage large Angular applications by organizing code into a monorepo. Discover how Nx simplifies dependency management, enforces boundaries, and enables incremental builds for improved developer productivity.

**Practical Exercise:**  
Learn how to use the Nx graph to visualize project dependencies, apply the module boundaries plugin to enforce architectural rules, leverage the build cache for faster builds, and utilize the affected feature to optimize CI/CD workflows.

---

### 212 Domain-Driven Design (DDD) for Modular Architecture

Explore how Domain-Driven Design (DDD) helps split large applications into cohesive, manageable modules and how to use the capabilities of NX to manage those modules within a monorepo. Learn to identify bounded contexts and organize features, shared logic, and UI components according to business domains. Understand the role of a shared kernel for cross-domain artefacts and how API libraries facilitate reuse of domain functionality across modules. Emphasize the public-private principle: hide as much as possible within libraries to prevent side effects.

**Practical Exercise:**  
Create a new Aircrafts domain within the Nx monorepo. Set up dedicated libraries for the Aircrafts domain for features, domain and ui components. Create an API library for the Aircrafts domain and expose only necessary artefacts. Use this API library within the Flights domain to demonstrate cross-domain reuse. Apply the public-private principle by restricting exports to only what is necessary for other domains by exporting only the routing configuration from a feature.

---

### 213 Sharing Artefacts within a Monorepo

Learn a best practice approach for sharing artefacts within a monorepo via dedicated API libraries. Understand the importance of encapsulation and the public-private principle to prevent unintended side effects and maintain clear boundaries between domain. Explore strategies for organizing shared logic, UI components, and services in a way that promotes reuse while minimizing coupling.

**Practical Exercise:**
Create an API library for the Aircrafts domain and expose the Aircraft Card and the Aircraft Service. Use this API library within the Flights domain to demonstrate reuse in a different domain.

---

### 214 Implementing Microfrontends

Discover how microfrontend architecture enables multiple teams to work independently on different parts of a large Angular application. Learn strategies for managing microfrontends using Nx and native federation. Explore approaches for state sharing via shared libraries. Understand the trade-offs between a microfrontend architecture and a deployment monolith, and learn best practices for maintaining consistency and reliability in a microfrontend architecture.

**Practical Exercise:**  
Add an application for the Aircrafts domain within the Nx monorepo. Convert both the Aircrafts and Flights applications into microfrontends using native federation. Use the shell project to host and integrate both microfrontends, enabling independent deployment and seamless interaction between the modules. Create a service to share common state between the microfrontends.

## Chapter 220: Signals and Reactive Programming in Angular

### 221 Fundamental usage of Signals
Understand the fundamentals of signals in Angular, including their purpose, benefits, and how they differ from traditional state management approaches. Learn how signals enable fine-grained reactivity and improve performance by minimizing unnecessary UI updates.

**Practical Exercise:**
Migrate the flight search view to use signals for managing state and triggering UI updates.

### 222 Use Specialized Signals for Databinding
Explore specialized signals in Angular, such as input signals and model signals, and how they facilitate efficient data binding between components and templates. Understand how to leverage these signals to create responsive and dynamic user interfaces.

**Practical Exercise:**
Migrate the flight side panel to signals

### 223 Signal based Form Controls
Learn how to create and use signal-based form controls in Angular. Understand how signals can enhance form handling, validation, and user interactions.

**Practical Exercise:**
Migrate the date time picker component to a signal based form control.

### 224 Reactive Programming to the Backend with the resource APIs
Learn how to use Angular's resource APIs to interact with backend services in a reactive manner. Understand how to leverage signals for managing data fetching, caching, and synchronization with the server.

### 225 RxJS Interop with Signals
Explore strategies for integrating RxJS observables with Angular signals. Learn how to convert between signals and observables to leverage existing RxJS logic within signal-based components.

**Practical Exercise:**
Implement automatic deboucing in the FlightCriteria component using RxJS. Implement request filtering and error handling for the flight request to the backend using existing RxJs operators.

## Capter 230: Signal Based Forms

> Preparation: Add the flight edit view

### 231 Implement a Signal Based Form

### 232 Split the form into smaller sub forms

### 233 Use Validators

### 234 Implement custom validators

### 235 Implementing Signal Based Form Controls

## Chapter 240: State Management with NgRx Signal Store

### 241 Basic Signal Store Usage

Learn how to use NgRx signal store for managing state in Angular applications, including setting up a simple store, updating state, and reacting to UI changes. Understand where and how to use the signal store in your architecture.

**Practical Exercise:**  
Refactor the flight search component to use the signal store.

---

### 242 Custom Features in Signal Store

Learn how to extend the NgRx signal store with reuseable custom features. Discover how you can use the custom features to apply the composition pattern to compose complex state management logic out of simple individual features. Understand how to use feature expectations and feature parameters to compose multiple features in a type safe way. 

**Practical Exercise:**  
Wrap the loading and management of flights into a custom 'withFlightEntities' feature, add a pagination feature which expects a loadPage method from the 'withFlightEntities' feature. Implement generic 'withLoadingState' and 'withSelectedItems' feature that can be used throughout the application.

---

### 243 RxJs Interop within the Signal Store
Learn how to integrate RxJs pipeline into the signal store. Understand how to use rxMethod.

**Practical Exercise:**
Implement debouncing of the showLoading flag within the custom feature.

### Complex State Management in NgRx Signal Store with Different Patterns

Dive into advanced patterns for signal store to manage a complex and large state with the help of signal store entities, redux using the event api and hateoas. Finally a comparision of different state management approaches shall give you guidance to make a decision for the right approach.

**Practical Exercise:**  
Refactor the signal store of the flight search component to use the entities package, the event api or the hateoas pattern.

## Optional: Performance Optimization in Angular Applications

### Lazy Loading and Code Splitting

Explore techniques for reducing initial load times by lazy loading modules and components. Learn how to configure Angular routes for lazy loading and leverage Nx for efficient code splitting. Use Preloading to get the best of both worlds: fast initial load and quick access to additional features.

**Practical Exercise:**  
Implement lazy loading for the Aircrafts and Flights features in the sample project and verify reduced bundle sizes.

---

### Change Detection Strategies

Learn how Angular's change detection works and how to optimize it using zoneless, OnPush, signals, and manual triggering. Understand when to use each approach to minimize unnecessary UI updates and improve application performance.

**Practical Exercise:**  
Refactor a component in the flight management project to use the OnPush change detection strategy and measure the performance improvements.

---

### Optimizing Rendering and List Performance

Discover best practices for rendering large lists efficiently using trackBy, virtual scrolling, and memoization. Learn how to avoid common performance pitfalls in Angular templates.

**Practical Exercise:**  
Optimize the flight list component to handle large datasets using trackBy and Angular CDK virtual scroll.

---

### Performance Profiling Angular Applications

Learn how to profile Angular applications to identify and resolve performance bottlenecks. Explore tools such as Chrome DevTools and Angular DevToolsfor analyzing runtime performance, memory usage, and change detection cycles. Understand how to interpret profiling data to optimize rendering, detect unnecessary computations, and improve overall application responsiveness.

**Practical Exercise:**  
Profile the flight search and flight list components using Angular DevTools and Chrome DevTools. Identify performance bottlenecks and implement optimizations based on profiling insights.

## Optional: Authentication and Authorization in Angular

### Introduction to OAuth and OpenID Connect

Gain a foundational understanding of OAuth 2.0 and OpenID Connect, the industry standards for secure authentication and authorization in modern web applications. Learn the differences between authentication and authorization, the roles of resource owners, clients, authorization servers, and resource servers, and how tokens are used to grant access to protected resources.

**Practical Exercise:**  
Diagram the OAuth 2.0 and OpenID Connect flows for the flight management project. Identify where each actor fits and how tokens are exchanged during authentication and authorization.

---

### Authentication Gateways

Explore the concept of authentication gateways as a centralized solution for managing authentication across multiple resource servers and microfrontends.

**Practical Exercise:**  
Troubleshoot the authentication flow of a sample application, trace the request and flow of required authentication requests with the help of the Chrome DevTools.

## Optional: AI-Assisted Coding in Enterprise Angular Applications

### Setting the Context for AI-Assisted Coding

Learn how to provide effective project context to AI coding assistants. Understand the importance of sharing relevant architecture, domain models, and coding standards to receive accurate and useful code suggestions. Explore strategies for securely sharing context while protecting sensitive information.

**Practical Exercise:**  
Set up the Nx and Angular MCP servers to make your workpace visible to the ai agent. Configure Copilot custom instructions and reusable prompt templates in to standardize code generation. Practice using these prompts to generate reusable Angular components aligned with the project's design system and architecture.

---

### Prompting Strategies for Effective AI Collaboration

Discover best practices for crafting prompts that yield high-quality code and documentation from AI tools. Learn how to specify requirements, constraints, and desired outcomes. Explore iterative prompting, providing feedback, and refining outputs for enterprise-grade solutions.

**Practical Exercise:**  
Write a series of prompts to generate new small features. Refine the context and the prompts to improve code quality.

---
---

# Training: Data Driven Applications with Angular

## Chapter 1: State Handling in Data Driven Applications

### Understanding UI State vs. Server State

Explore the distinction between applications with large UI state and those with minimal UI state. Data driven applications primarily rely on the state managed by the server, with the client acting as a consumer and presenter of this data. Recognize that effective server-side state management is crucial for consistency, reliability, and scalability.

**Practical Exercise:**  
Analyze the flight management project to identify which parts of the application rely on server state versus UI state.

---

### View Models and the Model-First Approach

Understand the advantages of designing a specialized view model for each individual view in your application and how to use concepts from Domain Driven Design to create the structure of these view models. Learn how the "one request per view" pattern allows the client to render the entire view efficiently, resulting in faster load times and a smoother user experience. Explore the model-first approach, where you define the view model using TypeSpec in a technology-agnostic way before implementing the API or UI, ensuring clear contracts and reducing integration friction.

**Practical Exercise:**  
Define a TypeSpec models for the aircraft search and the aircraft details view, representing all data needed to render the view. The goal for the aircraft search view is to lookup aircrafts. On the aircraft details view it shall be possile to edit the details of an aircraft as well as to see for which flights the aircraft is blocked.

---

### Transporting State from Server to Client

Learn how truly RESTful Web APIs and HATEOAS (Hypermedia as the Engine of Application State) can be utilized to transport state from the server to the client. Understand how HATEOAS enables dynamic navigation, decouples client logic from server implementation, and supports evolving business requirements.

**Practical Exercise:**  
Design a truly RESTful HATEOAS-compliant API for the aircraft search and aircraft details views that provide hypermedia links to guide client interactions and state transitions. For this we enrich a view model with proper metadata that is needed in the clien and specifiy the needed operations.

---

### Implementing HATEOAS in Angular with NgRx Signal Store

Learn how to implement the HATEOAS pattern in an Angular application using the NgRx signal store. Discover how to consume hypermedia links from a RESTful API, drive state transitions based on server-provided metadata and how to combine this with a pure ui state.

**Practical Exercise:**  
Implement the aircraft search and aircraft details views in Angular, using the NgRx signal store to manage state. Consume the HATEOAS links from the API to drive navigation and state transitions.

## Chapter 2: Data Management and Interaction Patterns

### Pagination, Sorting, and Filtering Large Datasets

Learn best practices for handling large datasets, including server-side pagination, sorting, and filtering. Understand how to design APIs and UI components that efficiently manage and display large lists. Learn how to use URL query params or complex filter objects to pass filtering criteria to the server, ensuring efficient data retrieval and a smooth user experience.

**Practical Exercise:**  
Add pagination, sorting, and filtering to the aircraft search view, ensuring efficient data retrieval and smooth user experience.

---

### Binding Data to Forms

Learn how to bind server-provided data in a repeatable way to Angular forms for editing and creation scenarios. Explore the use of forms to mutate the data and send changed data back to the server in an optimized way. Understand how you can improve user experience with client-side and server-side validation while you have to ensure full data consistency and integrity on the server side.

**Practical Exercise:**  
Implement a form for editing aircraft details. 

---
### Cross-Domain and Dynamic Data Validation and Lookup

Learn how to implement robust cross-domain data validation and lookup in forms using validators and specialized controls that communicate with the server. Explore strategies for validating data that depends on information not loaded into the UI. Understand how to create dynamic validation rules that adapt based on user input.

**Practical Exercise:**  
Implement a lookup control for aircrafts to be used in the flight edit form. Only aircrafts which are not blocked at the time of this flight are presented to the user. Depending on a change of the flight times, the control has to react and evetually force the user to select a different aircraft.

---

### Real-Time Data Synchronization

Explore techniques for keeping client data in sync with the server in real time using WebSockets, Server-Sent Events, or polling. Understand when to use each approach and how to update the UI reactively.

**Practical Exercise:**  
Enable real-time updates for the aircraft calendar that shows when an aircraft is blocked through a flight. Each time the aircraft is blocked for a new flights the calendar should be updated in real time.

---

### Error Handling in Data-Driven Applications

Understand the distinction between foreseeable (expected) and unforeseeable (unexpected) errors in data-driven applications. Foreseeable errors—such as validation failures, authorization issues, or business rule violations—can be anticipated and handled with clear, actionable feedback for users. Unforeseeable errors—like network outages or unexpected server failures—require resilient fallback strategies and generic error messaging to maintain application stability.

Learn how to design error handling flows that optimize the user experience for each error type. Ensure foreseeable errors are communicated with specific guidance and displayed at the appropriate position in the UI, making the context of the error clear to the user. For unforeseeable errors, implement strategies to gracefully catch them.

**Practical Exercise:**  
Implement global and per-component error handling for the aircraft management features. Ensure foreseeable errors display targeted, user-friendly messages and guidance, while unforeseeable errors trigger generic notifications and offer retry options.

---