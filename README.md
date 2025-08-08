### Use this theme in your shopify store
1. download the zip file of `master` branch code
2. upload the zip file in your store. so simple and easy.

### Benifits of connect Shopify github app in this repository
1. Update code that edited by store admin. the code committed by `shopify bot`

### Getting started with shopify theme: setup your local development environment
1. Install shopify CLI.
2. Make a folder with the name of your theme.
3. Create required folders and file first.
- Required folders
```
├── assets
├── config
├── layout
├── locales
├── sections
├── snippets
└── templates
    └── customers
```
- Required Files
```
├── assets
└── config
    ├── settings_data.json
    └── settings_schema.json
├── layout
    ├──theme.liquid
    └──checkout.liquid
├── locales
├── sections
├── snippets
└── templates
    ├── 404.liquid
    ├── article.liquid
    ├── blog.liquid
    ├── cart.liquid
    ├── collection.liquid
    ├── gift_card.liquid
    ├── index.liquid
    ├── list-collections.liquid
    ├── page.liquid
    ├── password.liquid
    ├── product.liquid
    └── search.liquid
└── customers
    ├── account.liquid
    ├── activate_account.liquid
    ├── addresses.liquid
    ├── login.liquid
    ├── order.liquid
    ├── register.liquid
    └── reset_password.liquid
```
4. After create requred folders and files. You should have a shopify partner account and a store.
5. Then invoke this command in your terminal or powershell from the root directory of your theme project.
```
shopify theme dev
```
6. For the first time and maybe some time in letter you need to login in your store with the CLI. No worry, the CLI help you for this authentication easy.
7. Normally the localhost serve in `http://localhost:9292`.
8. You should also find a store editor link in your terminal or powershell. This will help you to manage content for your store.
9. Thats it. Happy shopify coding.

### Add Tailwind CSS in shopify theme

1. Initial `node.js` package manager with `npm` or `yarn` by running

```bash
yarn init -y #or
npm init -y
```

2. Install packages and initialize a Tailwind config file

```bash
npm install -D tailwindcss @shopify/prettier-plugin-liquid
#or
npx tailwindcss init
```

3. Create a CSS file in the `assets` directory. Name it `tailwind.css` or anything you want. doesnt matter.
4. Paste this line of code in this file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add a Liquid Stylesheet Tag to `theme.liquid` File in `layouts` Folder.

```liquid
{{ 'application.css' | asset_url | stylesheet_tag }}
{{ 'base.css' | asset_url | stylesheet_tag }}
```

6. Include this in your `tailwind.config.js` file.

```js
module.exports = {
    ...
    content: ['./**/*.{liquid,json}'],
    ...
}
```

7. Add a Watch Script to `package.json` file. This will continuasly compile your Tailwind CSS into raw css. Then your theme get the raw css.

```json
"scripts": {
    "watch": "npx tailwind -i ./assets/tailwind.css -o ./assets/application.css --watch"
  },
```
8. Alternatively you can write a script in your `package.json` file.
```json
"start": "shopify theme dev",
"watch": "npx tailwind -i ./assets/tailwind.css -o ./assets/application.css --watch",
"dev": "npm run start & npm run watch"
```
This will help you run these aretwo in one command. If you use out of UNIX-like machine. This will maybe not work. But you can try this-
```json
"dev": "npm-run-all --parallel start-watch wp-server"
```