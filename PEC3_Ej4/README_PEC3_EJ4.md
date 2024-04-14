# Comandos que se han de ejecutar para transpilar y ejecutar la aplicación.

Para transpilar y ejecutar una aplicación TypeScript utilizando webpack, necesitaremos seguir los siguientes pasos:

1. Instala las dependencias necesarias:

```bash
npm install --save-dev typescript webpack webpack-cli ts-loader
```

2. Crea un archivo `webpack.config.js` en la raíz del proyecto y añadir la siguiente configuración:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

3. Asegúrarse de que el archivo `tsconfig.json` está configurado correctamente. Aquí hay un ejemplo de cómo podría verse:

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": ["./*"]
}
```

**A tener en cuenta** >>> La configuración de tsconfig depende de como tengas las carpetas organizadas.

4. Añadir scripts al archivo `package.json` para ejecutar webpack:

```json
"scripts": {
        "build": "webpack --mode production",
        "start": "webpack serve --mode development"
    }
```

5. Ahora se puede transpilar la aplicación ejecutando el siguiente comando:

```bash
npm run build
```

Esto creará un archivo `bundle.js` en la carpeta `dist` que contiene la aplicación transpilada.

```bash
npm run start
```

Para ejecutar

