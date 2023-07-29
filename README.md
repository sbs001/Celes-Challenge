# Celes Front-End Challenge 🚀
This app represents a simple SKU management dashboard to solve the thecnical Front-End challende to Celes. \
You can see this app in the following link ➡️ https://sbs001.github.io/Celes-Challenge/ 🚀

**Note:** This application connects to the Shopify endpoint provided by Celes through a own simple Node.js server deployed on https://simple-challenge-server.onrender.com/

In this app you can see a dashboard with a list of products in your inventory with their sku, name and stock. \
You can filter by name or sku and know the details of them.

## Contribute
### Requisites
- Node (v16+)
- NPM
- Git

### 1. Clone this repository
  ```
  $ git clone https://github.com/sbs001/Celes-Challenge.git
  ```
### 2. Install dependencies
  ```
  $ cd Celes-Challenge
  $ npm install
  ```
### 3. On the root project directory create a `.env` file with the value
  ```
  REACT_APP_API_URL=https://simple-challenge-server.onrender.com
  ```
  **Note:** Also, you can run locally the Node server situes in [this repository](https://github.com/sbs001/Simple-Node-Server).\
  In this case, you must replace the api-url indicating the port
  ```
  REACT_APP_API_URL=http://localhost:6060
  ```
### 4. Run the client
  ```
  $ npm start
  ```

After the app will run on http://localhost:3000. \
The page will reload if you make edits.\
You will also see any lint errors in the console.

---

## About development 
This app was developed in [TypeScript](https://www.typescriptlang.org/docs/) (v4.9.5) and adopts the [React](https://react.dev/) library in the last version (v18.2.0) as a development framework and methodology.\
Additionally this project uses other libraries
- [Axios 🔗](https://axios-http.com/docs/intro) to send HTTP request to server.
- [Jest 🔗](https://jestjs.io/docs/tutorial-react) as a test executor.
- [React Testing Library 🔗](https://testing-library.com/docs/react-testing-library/intro/) as a philosophy and provider of VirtualDOM to test componentes.
- [Sass 🔗](https://sass-lang.com/documentation/) as a preprocessor to generate style sheets and facilitate styling.
- [@phosphor-icons/react 🔗](https://github.com/phosphor-icons/react) as a icons provider.

**Note:** This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Architecture 📂
The application organizes her structure based on a module-oriented model, which allows us to encapsulate functionalities without generating dependencies. Also, this model allows easy expansion avoiding coupling and destructuring, and having a good organization.\
In the `src` folder will find the globar-order resorces(app entry point, utils, global components, global hooks, tests suites,...).\
And, in `src/modules` folder you will find each independet modules, whiich follow the next structure and only uses his own and global resourses.
```
module
  |__module components
    |__component
      |__component
      |__component stylesheet
      |__component exportation file
  |__module constants
  |__module entities
  |__module services
  |__module pages
  |__module entry point
```

### Development principles ♨️
- Use functonal components
- Use hooks to separate implementation details and responsibilities
- Separate in independent components with a single responsability
- Develop abstraction-dependent components
- Use arrow-functions to declarate components
- Promise handling with .then methods
- Use index to export code blocks and have a cleaner import
- Dont repeat code blocks
- Component declaration with less than 70 lines
- Name components using *UpperCamelCase*
- Name folder and files using *snake-case*
- Dont use *!importants* on stylesheets
- Dont style generic elements and tags

**Note:** This is a small application that doesnt require the use of a global state manager or a page router.

### Testing 🧪
This development adopts React Testing Library philosophy based on user interaction tests. Giving primary importance to how the components are used.\
the tests are in the `__tests__` folder, which simulates the folder structure of the project with the test files
```
__tests__
|__App.test.tsx
|__modules
  |__module
    |__module pages
    |__module components
      |__component
        |__component test file
```

You can run the test execution using the script
```
$ npm run test
```
or 
```
$ npm run test:cov
```
The last script (`npm run test:cov`) shows the coverage level and generates a report located on `/coverage/lcov-report/index.html`

![Captura de pantalla de 2023-07-28 23-02-23](https://github.com/sbs001/Celes-Challenge/assets/50562395/5c4c92f8-a3ad-40b8-91e5-bbfc85e9ee4e)
![Captura de pantalla de 2023-07-28 23-02-04](https://github.com/sbs001/Celes-Challenge/assets/50562395/40ed1019-689d-478f-9fc7-9ea84d85488b)
