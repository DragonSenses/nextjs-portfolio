# A new journey

Just like previous projects, this will document the development process.

# Create NextJS project

To create a new `Next.js` project, run in the terminal:

```sh
npx create-next-app@latest
```

A prompt will show up. Can switch between No / Yes using arrow keys, then hit Enter.

Here is the prompt, with choices in brackets:

```sh
npx create-next-app@latest

Need to install the following packages:
  create-next-app@13.4.7
Ok to proceed? (y) y
√ What is your project named? ... nextjs-portfolio
√ Would you like to use TypeScript with this project? ... [No] / Yes
√ Would you like to use ESLint with this project? ... No / [Yes]
√ Would you like to use Tailwind CSS with this project? ... No / [Yes]
√ Would you like to use `src/` directory with this project? ... [No] / Yes
√ Use App Router (recommended)? ... No / [Yes]
√ Would you like to customize the default import alias? ... [No] / Yes
```

### Change directory to project folder

```sh
cd .\nextjs-portfolio\
```

### Open `page.js`, the Home route

Immediately we can see an issue: 

```sh
Parsing error: Cannot find module 'next/babel'
Require stack:
```

When hovering over this line:
```js
import Image from 'next/image'
```

The fix: see [Configure babel in NextJS](https://nextjs.org/docs/pages/building-your-application/configuring/babel).

Inside `.eslintrc.json`, change this:

```json
{
  "extends": "next/core-web-vitals"
}
```

To this:

```json
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```

## Configure TailwindCSS with NextJS

[Installing Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs), follow the steps in the documentation if TailwindCSS still isn't working properly. The first step is already done.

## Next.js Project Structure

[Project Structure](https://nextjs.org/docs/getting-started/project-structure).

## Start the Build Process

```sh
npm run dev
```

Which will start up in `http://localhost:3000`, so open that link up in a browser.

We will see some boiler-plate code inside `page.js`.

We can delete the JSX element that's being returned by `Home()`:

```js
export default function Home() {
  return (
    // Delete everything in here
  );
}
```

### Install icons

To use the icons at [Font Awesome Icons (free)](https://fontawesome.com/search?m=free&o=r), we need to do some set-up.

Going to use `<head>` tag to import [Font Awesome CDN](https://cdnjs.com/libraries/font-awesome) package, click the `</>` icon to copy the `<link>` tag. Paste it inside the `<head>`.

- One change: have to capitalize the O in Origin and P in Policy

```js
<link rel="stylesheet" href="..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
```

In `layout.js`,

```js
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

# Create Components

Let's make the `Header` component. Under `/app`, create file `Header.js`.

Type `rfc` to create a React Functional Component in VSCode using the *ES7+ React/Redux/React-Native snippets* extension.

```js
import React from 'react';

export default function Header() {
  return (
    <div>Header</div>
  )
}
```