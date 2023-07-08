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

## AboutCard component

I plan to make squares of info blocks in the content section. Going to name this component `AboutCard`.

```js
import React from 'react';

export default function AboutCard(props) {
  const { children, heading } = props;
  
  return (
    <div className='font-medium text-sm leading-5 p-2 border border-sky-500
    sm:font-semibold sm:text-base sm:flex sm:flex-col'>
      AboutCard
      { heading && 
        <h3 className='sm:p-8'>heading</h3>
      }
      <p className='sm:m-auto sm:p-1'>
        {children}
      </p>
    </div>
  )
}
```

Update `SectionIntro`

```js
import React from 'react';

export default function SectionIntro(props) {
  const { children, dark } = props;
  return (
    <div className='w-full flex items-center gap-2.5 pt-10 pr-5 pb-2.5 pl-5'>
      <div className={(dark) ?
        'h-0 flex-1 bg-white':
        'h-0 flex-1 bg-gray-900'}
      >
      </div>
      <h1 className={(dark) ? 
        'font-extrabold text-4xl sm:text-6xl [-webkit-text-stroke:_1.5px_white]':
        'font-extrabold text-4xl sm:text-6xl [-webkit-text-stroke:_1.5px_#0f172a]'}>{children}</h1>
      <div className={(dark) ?
        'h-0 flex-1 bg-white':
        'h-0 flex-1 bg-gray-900'}
      >
      </div>
    </div>
  )
}
```

## Skills component

Another section that will showcase skills: (WIP)

```js
import React from 'react';
import SectionIntro from './SectionIntro';

export default function Skills() {
  return (
    <section id='skills' className='sm:text-6xl'>
      <SectionIntro dark={true}>SKILLS</SectionIntro>

      <div className=''>

      </div>
    </section>
  )
}
```

## Projects component

In `/app/Projects.js`, will showcase projects:

```js
import React from 'react';
import SectionIntro from './SectionIntro';

export default function Projects() {
  return (
    <section id='projects' className='sm:text-6xl'>
      <SectionIntro>PROJECTS</SectionIntro>
      <div className=''>

      </div>
    </section>
  )
}
```

Plan to do is an image overlay that hovers over each project. Also plan to separate projects by complexity.

### ImgOverlay component

This will visually showcase projects. It will have an Image, and two links. One to the Github link and one working link towards the project itself if applicable.

```js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImgOverlay(props) {
  const { imgSrc, description, title, githubLink, projectLink, children } = props;
  return (
    <div className='max-w-full object-contain relative duration-300'>
      <Image 
        className='max-w-full'
        src={imgSrc}
        alt={description}
      />
      <div className="overlay">
        <h2 className="header"></h2>
        <p className="para"></p>
        <div className="links">
          <Link></Link>
          <Link></Link>
        </div>
      </div>
    </div>
  )
}
```

Style it

```js
export default function ImgOverlay(props) {
  const { imgSrc, description, title, githubLink, projectLink, children } = props;
  return (
    <div className='max-w-full object-contain relative duration-300 hover:opacity-80'>
      <Image 
        className='max-w-full'
        src={imgSrc}
        alt={description}
      />
      <div className="absolute opacity-0 hover:opacity-80 duration-300 bg-gray-900 
      text-white flex flex-col items-center justify-around p-5 inset-0">
        <h2 className="font-medium underline">{title.toUpperCase()}</h2>
        <p className="">{children}</p>
        <div className="flex w-full items-center justify-around">
```

Style the Links converted to anchor tags:

```js
export default function ImgOverlay(props) {
  const { imgSrc, description, title, githubLink, projectLink, children } = props;
  return (
    <div className='max-w-full object-contain relative duration-300 hover:opacity-80'>
      <Image 
        className='max-w-full'
        src={imgSrc}
        alt={description}
      />
      <div className="absolute opacity-0 hover:opacity-80 duration-300 bg-gray-900 
      text-white flex flex-col items-center justify-around p-5 inset-0">
        <h2 className="font-medium underline">{title.toUpperCase()}</h2>
        <p className="">{children}</p>
        <div className="flex w-full items-center justify-around">
          <a
            className='cursor-pointer py-1 px-8 text-inherit bg-gray-900 
            no-underline duration-300 hover:text-gray-900 hover:bg-white'
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`fa-brands fa-github text-3xl`}></i>
          </a>
          <a
            className='cursor-pointer py-1 px-8 text-inherit bg-gray-900 
            no-underline duration-300 hover:text-gray-900 hover:bg-white'
            href={projectLink}
            target="_blank"
            rel="noreferrer"
          >
            Link to Project &#8594;
          </a>
        </div>
      </div>
    </div>
  )
}
```

Now to use `ImgOverlay` component in `Projects` section.

```js
export default function Projects() {
  return (
    <section id='projects' className='sm:text-6xl'>
      <div className='w-11/12 max-w-full flex items-center flex-col'>
        <SectionIntro>PROJECTS</SectionIntro>
        <div className='grid gap-1.5 [grid-template-columns:_repeat(1,_minmax(0,_1fr))]
          sm:[grid-template-columns:_repeat(2,_minmax(0,_1fr))]
          lg:[grid-template-columns:_repeat(3,_minmax(0,_1fr))] lg:gap-2.5'
        >
          <ImgOverlay
            imgSrc={img1}
            description={"first project is an ecommerce site"}
            title={"PROJECT 1"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>Next.js</strong> and <strong>Commerce.js</strong>
          </ImgOverlay>

          <ImgOverlay
            imgSrc={img2}
            description={"second project"}
            title={"PROJECT 2"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>Stripe.js</strong> and <strong>Zustand</strong>
          </ImgOverlay>

          <ImgOverlay
            imgSrc={img3}
            description={"third project is an ecommerce site"}
            title={"PROJECT 3"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>MongoDB</strong> and <strong>Node.js</strong>
          </ImgOverlay>

          </div>

        </div>
      </div>
    </section>
  )
}
```

## Experience Component

```js
import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <div className=''>
        <SectionIntro dark={true}>Experience</SectionIntro>
      </div>
    </section>
  )
}
```

Returns a JSX element. section with `SectionIntro`. It will have another div contained within that contains the content.

Each content will be a list item put inside a `ListEntry` component.

```js
import React from 'react';

export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <div>
      <div className='header'>
        <h1 className='title'>{title}</h1>
        <h1 className='date'>{date}</h1>
      </div>
      <ul className='ul'>
        {children}
      </ul>
    </div>
  )
}
```

Now we can add our experiences. Each with a `ListEntry` passing in the `title` and `date` props. While an unordered list of `li` list items will provide brief explanations.

```js
import React from 'react';
import ListEntry from './ListEntry';

export default function Experience() {
  return (
    <section id="experience">
      <div className='max-w-full w-11/12 flex items-center flex-col'>
        <SectionIntro dark={true}>Experience</SectionIntro>

        <div className="flex flex-col w-full gap-8 py-0 px-5 sm:py-5 sm:px-12">
          <ListEntry title={"Workplace"} date={"2023 - Present"}>
            <li>List Item</li>
            <li>List Item</li>
          </ListEntry>
          <ListEntry title={"School"} date={"2017 - 2023"}>
            <li>List Item</li>
          </ListEntry>
          <ListEntry title={"Tutor"} date={"2016 - Present"}>
            <li>List Item</li>
          </ListEntry>
        </div>
      </div>
    </section>
  )
}
```

## Footer Component

```js
import React from 'react';

export default function Footer() {
  return (
    <div>
      Footer
    </div>
  )
}
```

Going to make a design decision of passing in a dark prop to determine whether the `Footer` is dark or light similar to `SectionIntro`. The reason for this is because we want to be able to conditionally render the Footer component depending on whether there are (2n) or (2n+1) sections/components in between. Whatever the case, in order to follow the same color scheme pattern for the sections we can easily adjust the footer to match. This means we can squeeze in any section/page with ease.

```js
import React from 'react';

export default function Footer() {
  return (
    <footer className={(dark ? 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-gray-900 text-white" : 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-white text-gray-900"
    )}>
      Footer
    </footer>
  )
}
```

Now as for the content of the Footer, we will just have links with icons inside.

```js
export default function Footer() {
  return (
    <footer className={(dark ? 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-gray-900 text-white" : 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-white text-gray-900"
    )}>
      <a href="https://github.com/DragonSenses" 
         className={(dark ? styles.iconDark : styles.icon)} 
         target="_blank" rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://google.com/" 
         className={(dark ? styles.iconDark : styles.icon)} 
         target="_blank" rel="noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://google.com/" 
         className={(dark ? styles.iconDark : styles.icon)} 
         target="_blank" rel="noreferrer"
      >
        <i className="fa-solid fa-address-card"></i>
      </a>
    </footer>
  )
}
```

Replace `styles.icon` and `styles.iconDark` with the prop utility classes in TailwindCSS.