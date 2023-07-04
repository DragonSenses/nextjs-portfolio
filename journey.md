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

### Cool TailwindCSS feature -> Arbitrary Properties

[Arbitrary Properties](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties) allows usage of a CSS property that Tailwind doesn't include as a utility out of the box. Use square bracket notation:

```js
<div class="[mask-type:luminance]">
  <!-- ... -->
</div>
```

### Text Shadow support to Tailwind CSS

[How to add Text Shadow](https://www.hyperui.dev/blog/text-shadow-with-tailwindcss).

Wanted to convert this:

```css
  text-shadow: 0.03em 0.03em 0 rgb(0, 255, 213),
    0.06em 0.06em 0 rgb(154, 192, 18),
    0.09em 0.09em 0 rgb(226, 143, 87),
    0.11em 0.11em 0 rgb(161, 24, 127);
```

So will use arbitrary properties here

```js
'[text-shadow:_0.03em_0.03em_0_rgb(0_255_213),_0.06em_0.06em_0_rgb(154_192_18),_0.09em_0.09em_0_rgb(226_143_87),_0.11em_0.11em_0_rgb(161_24_127)]'
```

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

## Header Component

```js
import React from 'react';

export default function Header() {
  return (
    <header className='bg-gray-900 text-white min-h-screen flex sm:flex-col 
      justify-center items-center select-none gap-3.5'>
      <h1 className='text-6xl text-center font-extrabold sm:text-7xl sm:[text-align:unset]
        sm:[writing-mode:unset] sm:[text-orientation:unset] sm:[letter-spacing:4px]
        [writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:-0.25em]
        [text-shadow:_0.03em_0.03em_0_rgb(0_255_213),_0.06em_0.06em_0_rgb(154_192_18),_0.09em_0.09em_0_rgb(226_143_87),_0.11em_0.11em_0_rgb(161_24_127)]
        '>Header</h1>
      <nav className='flex flex-col sm:flex-row justify-center items-center
        text-6xl sm:text-7xl gap-12 '>
        <a href='#about-me' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-dragon nav-icons`}></i>
        </a>

        <a href='#skills' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-list-check nav-icons`}></i>
        </a>

        <a href='#projects' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-diagram-project nav-icons`}></i>
        </a>

        <a href='#experience' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-book-open nav-icons`}></i>
        </a>

      </nav>
    </header>
  )
}
```

See how I made use of

- [Arbitrary Properties](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties)
- [@apply directive](https://tailwindcss.com/docs/functions-and-directives) for creating a `nav-icons` utility class

What it looks like in global css
```css
.nav-icons {
  @apply cursor-pointer duration-300 hover:text-teal-400 hover:scale-110 hover:[text-shadow:_0.03em_0.03em_0_rgb(255_255_255)]
}
```

Now going to replace the anchor tags with [Link](https://nextjs.org/docs/app/api-reference/components/link) to gain the benefits of prefetching and client-side navigation offerred by NextJS.

## About component

This will contain the Aboutme page.

The structure so far:

```js
import React from 'react';
import SectionIntro from './SectionIntro';

export default function About() {
  return (
    <section id='about-me' className=''>
      <div className=''>
        <SectionIntro>ABOUT ME</SectionIntro>
        <div className=''>This will contain content
        
        </div>

        <div className=''>
          <i className="fa-solid fa-dragon"></i>
          <i className="fa-solid fa-dumbbell"></i>
          <i className="fa-solid fa-book-open-reader"></i>
          <i className="fa-solid fa-mug-hot"></i>
        </div>
      </div>
    </section>
  )
}
```

I plan to make squares of info blocks in the content section.