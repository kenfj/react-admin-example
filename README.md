# React-Admin TypeScript Example

This is another React-Admin starter sample app using TypeScript.

* Live Demo: http://kenfj.github.io/react-admin-example/
* This app is using
  - Create React App + TypeScript + `react-admin`
  - 2 types of Tabbed page
    - `<TabbedShowLayout>` + `<Tab>` in Expand page
    - Tabbed `<List>` + `<Datagrid>` and `useListContext()`
  - `<ReferenceField>` + `<FunctionField>`
  - Custom Fields and `useRecordContext()`
  - Custom Filter using `<ReferenceInput>` `<AutocompleteInput>`
  - Open Street Map (Leaflet) https://leafletjs.com/
  - JSONPlaceholder https://jsonplaceholder.typicode.com/

## About React-Admin

* `<ReactAdmin />`
  - https://marmelab.com/react-admin/
* React-Admin Official Demo Page and Source Code
  - https://marmelab.com/react-admin-demo/
  - https://github.com/marmelab/react-admin/tree/master/examples/demo/src
* Official Tutorial
  - https://marmelab.com/react-admin/Tutorial.html

## Setup App

```bash
npm install

BROWSER=none npm start
open http://localhost:3000/
```

## Initial Setup Note

```bash
# create react project
npx create-react-app react-admin-app --template typescript --use-npm

cd react-admin-app
npm install react-admin ra-data-json-server prop-types

# https://react-leaflet.js.org/docs/start-installation
npm install react-leaflet @types/leaflet
# note: dependencies VS devDependencies
# https://stackoverflow.com/questions/45176661

# add .css .js in index.html
# https://leafletjs.com/examples/quick-start/

# run unit test
npm test
```

## Deploy

setup deploy to Github Pages by Github Actions

```bash
# setup deploy to Github Pages
npm install gh-pages
# add homepage, predeploy and deploy in package.json

# manual deploy to GitHub Pages
npm run deploy

# setup Github Actions
# add .github/workflows/deploy_gh_pages.yml

# c.f. https://create-react-app.dev/docs/deployment/#github-pages
```

## Troubleshooting

* leaflet error: `Module parse failed: Unexpected token (10:41)`
  - fix `package.json` https://stackoverflow.com/questions/67552020

## Reference

* https://blog.n-t.jp/tech/react-admin-tutorial/
* https://qiita.com/issei_k/items/7cad2ae034467950b6e6
* https://ohbarye.hatenablog.jp/entry/2021/01/25/react-admin-impression
