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
- searchParams is a promise that resolves to an object containing the query parameters (e.g sorting and filters) *check /products
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
