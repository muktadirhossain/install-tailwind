# how to Use Tailwind Css with Post Css::
```bash
# RUN This commands:
npm init
# create index.html & css folder & main.css file
# go to : https://tailwindcss.com/docs/installation/using-postcss


# step 2:
npm install -D tailwindcss postcss autoprefixer vite
# step 3:
npx tailwindcss init -p

# Step 4:



```
## Add the paths to all of your template files in your tailwind.config.js file.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## RUN this Command::
```
 npx vite 
```