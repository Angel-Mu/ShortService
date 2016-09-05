![Wizeline Logo](https://datafox-data.s3-us-west-1.amazonaws.com/images/cb_44ce707481e64966dadd0d964c39b9bb.image/png)

# ShortService

### ¿Qué es?

> Servicio básico para acortar urls


### ¿Cómo empezar?
```
npm install
```

### Ejecutar ambiente de desarrollo 
```
npm run dev
```
### Ejecutar ambiente de producción 
```
npm start
```
### Ejecutar ambiente de desarrollo en S.O Windows
```
npm run dev_win
```
#### Requerimientos
```
node
mongodb
forever  -- global
nodemon  -- global
```

#### Importante
En el archivo **config/config.js** se debe especificar los puertos y la base de datos de la aplicación a desarrollar.
Así como también en el archivo **packages.json** el nombre de la aplicación y el nuevo repositorio en el cual estará trabajandose la nueva aplicación