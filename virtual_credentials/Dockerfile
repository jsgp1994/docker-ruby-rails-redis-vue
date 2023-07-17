# Utiliza la imagen de Ruby como base
FROM ruby:3.2.2

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY Gemfile Gemfile.lock ./

# Instala las dependencias de la aplicación
RUN bundle install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["rails", "server", "-b", "0.0.0.0"]
