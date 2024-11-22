---

# **Motos CRUD - Gestión de Motos de Alto Cilindraje**

Bienvenido al proyecto **Motos CRUD**, una aplicación web para gestionar una base de datos de motos de alto cilindraje. Este proyecto permite a los usuarios realizar operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) sobre un conjunto de datos utilizando **MongoDB** como base de datos y **Node.js** con **Express** como backend.

---

## **🚀 Características**

- **Base de Datos MongoDB**: Se utiliza MongoDB para almacenar y gestionar los datos de las motos.
- **CRUD Completo**: Funcionalidades para crear, leer, actualizar y eliminar motos.
- **Frontend Interactivo**: Interfaz sencilla y atractiva que permite interactuar fácilmente con los datos.
- **Diseño Estilizado**: Uso de colores **negro**, **gris** y **azul** para una experiencia visual moderna y profesional.

---

## **⚙️ Instalación y Configuración**

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/Andreax0x0/Motos.git
cd Motos
```

### **2. Instalar Dependencias**
Asegúrate de tener **Node.js** instalado y ejecuta:
```bash
npm install
```

### **3. Configurar las Variables de Entorno**
Crea un archivo `.env` en la raíz del proyecto y añade tu cadena de conexión a MongoDB:
```
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base_de_datos>?retryWrites=true&w=majority
PORT=3000
```

### **4. Ejecutar el Proyecto**
Inicia el servidor con:
```bash
npm start
```
Abre tu navegador en `http://localhost:3000` para ver la aplicación en acción.

---

## **🛠️ Funcionalidades CRUD**

### **1. Crear una Moto**
- Rellena el formulario en la página principal con los datos de la moto: 
  - Nombre
  - Marca
  - Cilindrada
  - Precio
- Haz clic en "Agregar Moto" para añadirla a la base de datos.

### **2. Leer las Motos**
- Todas las motos se muestran en la página principal.
- Cada moto incluye su nombre, marca, cilindrada y precio.

### **3. Actualizar una Moto**
- **Implementación sugerida (próximo paso):** Incluir un botón "Editar" para modificar los datos directamente desde la interfaz.

### **4. Eliminar una Moto**
- Haz clic en el botón "Eliminar" junto a una moto para borrarla de la base de datos.

---

## **🎨 Diseño y Estilos**

Los colores usados en el diseño son:
- **Negro (#1a1a1a):** Fondo de la página para un estilo elegante.
- **Gris (#dcdcdc):** Texto principal para una mejor legibilidad.
- **Azul (#007bff):** Botones e interacciones principales para destacar.

El archivo `styles.css` contiene todos los estilos personalizados.

---

## **🔗 Enlace al Repositorio**

[Repositorio en GitHub](https://github.com/Andreax0x0/Motos)

---

## **📚 Tecnologías Utilizadas**

- **Backend**: Node.js, Express.js
- **Base de Datos**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Gestor de Dependencias**: npm
- **Control de Versiones**: Git
