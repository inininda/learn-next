This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Additional Notes

- RSC (React Server Component)

- Server Components
- By Default Next.js treats all components as Server components. This component can perform server-side tasks like reading files or fetching data directly from a database.

- Client Components
- Add "use client" directive at the top of the component file. This component cant perform server side tasks like reading files, they can use hooks and handle user interactions.

## Routing conventions

- 1. All routes must live inside the app folder
- 2. Route files must be named either app.js or app.tsx
- 3. Each folder represents a segment of the URL path
- 4. Route directly tied to the folder. For example app/about will create /about url
- 5. Nested routes `[slug]` for dynamic routing
- 6. Catch all segments withiut the index of the page `[...slug]`. To include the index for the page (e.g /docs) use `[[...slug]]`

## Component function

- you can use async on the component `export default async function MyComponent(){}`

## Not Found Page

- To add not found page add not-found.tsx to the src/app folder
- It can be trigger inside the page (e.g: look at the example inside /blog/[id])
- You can create file for not found per page (e.g src/app/docs/not-found.tsx)
- not found page doesnt accept props, to share data to the not found page use "usePathname" from next/navigation (can only work for not-found client component)

## Private folder

- the folder and all its subfolders are excluded from routing
- Add an undescore at the start of the folder name

## Route group

- to group folder into common keyword for them. For example login, register and forgot password into auth folder.
- to do it, wrap the group name using () example: (auth) then the url will work normally like /login, /register etc.
- you can do nest route group

## layout

- default export a react component from layout.jsx or layout.tsx
- the component takes a children prop, which next.js will populate with your page content
- every next js appplicatin will need to have at least 1 layout
- layout can be define per page example: /app/docs/layout.tsx. This layout only for docs page
- multiple root layout, utilize root group, group the coresponding pages and then add layout.tsx inside each route group

# Metadata

- handle metadata in layout.tsx (apply to all its pages) or page.tsx (specific to that page).
- export static metadata object or export a dynamic generateMetadata function
- multiple metadata places in a route will be merged together where page metadata overriding layout metadata for matching properties
- only server compnent can use metadata
- title metadata has 3 type

```
title : {
    default: "Default title" -> as fallback
    template: "%s | Ninda Site" -> If you want to use template like prefix for the title
    absolute: "" -> if you want to distinct from parent property, this will enforce title
}
```

## Navigation

- use Link from "next/link"
- styling active link see (auth)
- params is a promise that resolves to an object containing the dynamic route paameter (e.g id)
- searchParams is a promise that resolves to an object containing the query parameters (e.g sorting and filters) \*check /products
- To make search params work in client component use "use" hook from react check check /products/product-1
- layout.tsx only has access to params
- Navigating programatically use useRouter. See /(marketing)/order-products. You can use replace (to erase the history) or push (to persist history, can use back button)
- For Server component can use redirect from next/navigation

## Templates

- next preserve the value for common component.
- Template are similar to layout where UI is shared between multiple pages but instead of preserve value, templates will fresh start when you navigate across pages
- export default React component from template.js or template.tsx, check (auth)
- you can use both template and layout at the same time. Layout will render first and the children will be replace by template

## Loading UI

- create loading.tsx or. loading.js per page or inside /app

# Error handling UI

- create error.tsx or error.js per page or inside /app
- check example in /products/error.tsx
- route will find the closest error boundary
- The error boundary wont ctach errors thrown in layout within the same segment. It will search the higher position error boundary
- check https://nextjs.org/docs/app/getting-started/error-handling for more detail
- to catch global error using global-error.tsx in /app folder, global error is the highest level error handling. Works only on production mode and requires htmll and body tags to be rendered.

# Parallel routing

- render multiple pages simultaneously within the same layout
- Parallel routes is defined using `slots`
- to create a slot, we use the `@folder` naming convention
- each defined slot automatically becomes a prop in its coresponding `layout.tsx`
- slot cant be access like a page for example /complex-dashboard/notifications (This doesnt work)
- slots is used in Dashboard with multiple sections, split views, multi-pane layout, complex admin interfaces
- feature of parallel routing:
  - independent route handling. Each slot can handle its own loading and error states
  - sub-navigation in routes. slots can function as a mini-application, complete with its own navigation and state management. users can interact with each section seperately like applying filters, sorting data or navigation through pages without affecting other parts.
- unmatched slots handle
  - add default.tsx to the slots see "complex-dashboard"

# Conditional routes

- check src/app/complex-dashboard/layout.tsx

# Intercepting routes

- allows you to load a route from another part of your application within the current layout.
- useful to display new content while keeping the user in the same context
- ex: src/app/f1
  - F1 is source folder
  - F2 is the target folder
  - to intercepted F2 when access it from F1, we create folder (.)f2 at the same level as f2
  - to intercept the segment one level above use (..) (\*see f3 example inside f1 page)
  - to intercept the segment two level above use (..)(..) (\*see f4 example inside f2 page)
  - (...) to match segments from the root app directory (\*see F5 example from src/app/f1/f2/inner-f2)
  - Parallel intercepting see example in src/app/photo-feed

# Route Handlers

- Check app/hello and app/comments for demo How to use GET, POST, etc requests
- it can act like page.tsx.
- If there is page.tsx and route.ts at the same folder, route.ts will be prioritize. To prevent this put route.ts in sub folder for exmple api folder inside the main folder.
- When request is not available, next js will return 405 Method not allowed
- Dynamic route handler:
  - see app/comments/[id] for example for params
  - see app/comments GET for example for query params

# Route Handler Headers

- metadata associated with an API request and response
  - Request headers
    - Sent by client to the server and has essential information about the request `(check src/app/profile/api/route.ts for example)`
  - Response headers
    - sent from server to cient and has information about the server and the data being sent to the response `(check src/app/profile/api/route.ts for example)`

# Cookie in route handlers

- Small pieces of data that a server sends to a user's web browser
- The browser can store the cookies and send them back to the same server with future requests
- Main purposes:
  - Managing sessions (like user logins and shopping carts)
  - Handling personalization (such as user preferences and themes)
  - tracking (like recording and analyzing user behavior)
- `(check src/app/profile/api/route.ts for example)`

# Handling redirect in route handler

- To redirect user from one endpoint to the other we can use `redirect` from next/navigation. Check `src/app/users/api/route.ts` for example.

# Caching in route handler

- by default the next js is using caching.
- but to force caching we can use example in `src/app/time/route.ts`
- during development there is no caching, so you have to build the app first.
- you can re-validate data to retrieve the latest data
- caching only work for GET method
- if dynamic functions like headers() and cookies() or working with the request object in GET methood, caching wont be applied.

# Middleware in route handler

- intercept and control the flow of the requests and responses throughout your application.
- it does this at global level and enhancing features like redirects, URL rewrites, authentication, headers, cookies and more.
- To add middleware just simply create middleware.ts in src folder. `src/middleware.ts` for example

# Rendering

- process of transforming the component code into user interfaces that they can see and interact with.
- The concept is included:
  - CSR (client side rendering)
    - Browser transform react component into what you see on screen.
    - Popular in single page applications
    - Drawback of CSR:
      - SEO -> CSR is not great for search engines as when search engine fetch your site, it's mainly empty div. If there are lots of nested components making API calls, the meaningful content might load too slowly for search engines to even ctach it.
      - Performance -> browser has to do everything like fetch data, build the UI, make everything interactive. When we add new features, the javascript bundle gets bigger making user wait even longer.

  - Server side solutions
    - search engine can easily index the server-rendered content.
    - user can see the actual HTML content rightaway instead of staring at a blank screen or loading spinner.
    - Hydration
      - React takes control in the browser and reconstruct the component tree in memory, using the server-rendered HTML as blueprint.
      - it carefully maps out where all the interactive elements should go, then hooks up the javascript logic.
    - Types:
      - SSG (Static site Generation)
        - happens during build time when you deploy your application to the server.
        - pages already rendered and ready to serve.
        - Perfect for content that stays relatively stable, like blog posts.
      - SSR (Server Side rendering)
        - Render pages on-demand when user request them.
        - Ideal for personalized content like social media feeds where the HTML changes based on who's logged in.
    - Drawbacks:
      - You have to fetch everything before you can show anything
        - server must finish collecting all necessary data before any part of the page can be sent to client.
      - You have to load everything before you can hydrate anything
      - You have to hydrate everything before you can interact with anything
    - Suspense SSR Architecture
      - user the <Suspense> component to unlock:
        - HTML streaming on the server.
        - Selective hydration on the client.
        - You dont have to fetch everything before you can shouw anything. We can use suspense with spinner when data is still being fetched.
        - Code splitting
          - Split some code into seperate scriot
          - Using `React.lazy` for code splitting.
          - Example
          ```bash
          import {lazy} from "react"
          const MainContent = lazy(() => import('./mainContent.js'))

          <Suspense fallback={<Spinner />}>
            <MainContent />
          </Suspense>

          ```

  - RSCs
    - The architecture introduces a dual-component model: 
      - Client Components
        - They are timpically rendered on the client-side (CSR) but they can also rebndered on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen.
        - have full access to the client environment, such as browser, allowing them to use state, effects, and event listeners for handling interactivity.
        - can also access browser APIs like geolocation and localStorage.
        - use `"use client"` to declare a component is client component
        - When component is load directly (without navigating from other page or component), the component is rendered in the server to allow user to immediately see the html content of the page. This is why if there is console in the component it will appear in the browser and also in the terminal.

      - Server Components
        - Designed to operate exclusively on the server.
        - unlike client components, their code stays on the server and is never downloaded to the client.
        - benefits:
          - smaller bundle sizes
          - direct access to server-side resources
          - enhanced security
          - imporoved data fetching
          - caching
          - faster initial page load and first contentful paint
          - improved SEO
          - efficient streaming
    - By default, Next js component is a server component.


# RSC Rendering lifecycle
- Browser request to the server -> Next js app router then match the url to the server components -> next js then instruct react to render server components -> React then render the server components and all the children, converting them into special json format known as RSC payload. React also prepare the client component instructions. -> Next js then take the RSC payload and also the client component instructions to generate HTML -> This HTML is stream to the browser right away, giving user a NON-interactive UI preview, At the same time NEXT js also stream the RSC payload, -> Then browser progressively render UI based on the streamed HTML and RSC payload -> The Final UI is shown to the user. -> Client component then undergo hydration transforming from static display into interactive display. 
- During the update flow, after react render server component, its children and also ckient component instructions, RSC payload then is streamed to the browser and triggering rout re-render. -> React then carefully reconcile or merger the new render output and updated the UI. 

# Static Rendering
- server rendering strategy where we generate HTML pages when building our application
- perfect for blog posts, e-commerce product listings, documentation and marketing pages
- How to do it: 
  - this is the default strategy in the app router
  - all routes are automatically prepared at build time without any additional setup. 



