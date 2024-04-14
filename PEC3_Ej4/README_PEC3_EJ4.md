# Comandos que se han de ejecutar para transpilar y ejecutar la aplicación.

Para transpilar y ejecutar tu aplicación TypeScript utilizando webpack, necesitarás seguir los siguientes pasos:

1. Instala las dependencias necesarias:

```bash
npm install --save-dev typescript webpack webpack-cli ts-loader
```

2. Crea un archivo `webpack.config.js` en la raíz de tu proyecto y añade la siguiente configuración:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

3. Asegúrate de que tu archivo `tsconfig.json` está configurado correctamente. Aquí hay un ejemplo de cómo podría verse:

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
  "include": [
    "./src/**/*"
  ]
}
```

4. Añade un script a tu archivo `package.json` para ejecutar webpack:

```json
"scripts": {
  "build": "webpack"
}
```

5. Ahora puedes transpilar tu aplicación ejecutando el siguiente comando:

```bash
npm run build
```

Esto creará un archivo `bundle.js` en la carpeta `dist` que contiene tu aplicación transpilada.

Por favor, ten en cuenta que estos pasos asumen que tu punto de entrada es `./src/index.ts` y que quieres que tu código transpilado se coloque en una carpeta `dist`. Si tu configuración es diferente, tendrás que ajustar estos pasos en consecuencia.