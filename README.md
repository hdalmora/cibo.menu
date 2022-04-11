<h1 align="center">
  Cibo.menu
  <br>
</h1>

<h4 align="center">A minimal Digital Menu solution for all kinds of merchants, built on top of  <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

<p align="center">
  <a href="https://cibomenu.netlify.app/"><img src="https://api.netlify.com/api/v1/badges/b23a6ea6-18fb-4182-b0ad-1b6ae0bb5a28/deploy-status"></a>
  <a href="https://badgen.net/badge/supabase/1.33.1/blue"><img src="https://badgen.net/badge/supabase/1.33.1/blue"></a>
  <a href="https://badgen.net/badge/react/17.0.2/orange"><img src="https://badgen.net/badge/react/17.0.2/orange"></a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#authors">Authors</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/9513573/162849797-21ebdd46-db75-4153-bd85-c8955e789f2d.png" />
</p>

## Key Features
* User Authentication via Magic Link
  - An easy and straight forward way to Log-in
* List of Digital Menus
  - See and manage all your creations
* Create a Digital Menu
  - All through a dynamic form, ease to use
* Edit and delete
  - You own your Menu
* LivePreview - Make changes, See changes
  - Instantly see your digital menu while you are creating/editing it.
* Generate a QR code
  - Also export the QR code to a PDF
* Access your menu page
  - See how your clients will experience your Menu

## Getting Started

```bash 
  yarn install  # install dependencies
  yarn dev      # start development server
  
  yarn build    # generate static build files
  yarn preview  # preview your build in a local environment
```

## Environment Variables

To run this project, you need to create a <a href="https://supabase.com/">Supabase</a> project and add the following vars to the .env file:

`VITE_APP_SUPABASE_URL`

`VITE_APP_SUPABASE_ANON_KEY`

## Authors

- [@hdalmora](https://github.com/hdalmora)

## License

MIT
