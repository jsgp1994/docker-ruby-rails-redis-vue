# Utiliza la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Compila y construye la aplicación para producción
RUN npm run build

# Instala el servidor HTTP para servir la aplicación
RUN npm install -g http-server

# Expone el puerto 3002 para acceder a la aplicación
EXPOSE 3002

# Define el comando para ejecutar el servidor HTTP y servir la aplicación
CMD ["http-server", "dist", "-p", "3002", "-c-1"]