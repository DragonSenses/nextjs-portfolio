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

# Next.js Project Structure

[Project Structure](https://nextjs.org/docs/getting-started/project-structure).