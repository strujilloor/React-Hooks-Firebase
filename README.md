# Visual Studio Code

## Abrir un proyecto

Existen varias formas de abrir un proyecto:

1. Abren la carpeta del proyecto y en la raíz dan click derecho, Abrir con Code.
2. Arrastran la carpeta del proyecto a Visual Studio Code.
3. Desde la terminal entramos al proyecto:

```
cd my-app

code .
```

## Extensiones VSC
- ES7 React/Redux/GraphQL/React-Native snippets
- Firebase Snippets
- generate-react-component
- Reactjs code snippets ( No me gustó )
- Simple React Snippets
- Material Icon Theme

# Google Fonts

## Agregar una fuente de Google Fonts a React

Agregar una fuente de Google Fonts a React es muy fácil:

1. buscamos la fuente en Google Fonts
2. + select this style
3. se agregará a tus fuentes seleccionadas, y ahí copiamos solo el link que está dentro de href
4. en index.js importamos la fuente de la siguiente forma
```css
@import url('https://fonts.googleapis.com/css2?family=Piedra&display=swap');
```
5. Listo podemos utilizarla, por ejemplo:
```css
body {
  font-family: 'Piedra', cursive;
}
```





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
