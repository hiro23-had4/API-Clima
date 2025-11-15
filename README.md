# Proyecto: Consulta de Clima con API
Aplicación web que consume una API de clima para mostrar información meteorológica en tiempo real según la ciudad ingresada por el usuario.

**🚀 Descripción del proyecto**

Este proyecto realiza el consumo de una API del clima para obtener datos meteorológicos actualizados.
Al ingresar el nombre de una ciudad, la aplicación envía una solicitud HTTP a la API y recibe un objeto JSON con información como:

🌡️ Temperatura actual

🔼 Temperatura máxima

🔽 Temperatura mínima

🏙 Nombre de la ciudad

Toda esta información se procesa y se muestra dinámicamente en la interfaz web.

**🛠️ Tecnologías utilizadas**

 - HTML5

 - CSS3

 - JavaScript (ES6+)

 - Fetch API

 - API externa (OpenWeather o la que tu prefieras)

 **Cómo funciona**

 - El usuario escribe el nombre de una ciudad y el país.

  - Se envía una petición GET a la API del clima utilizando fetch().
  
  - La API devuelve un JSON con los datos meteorológicos.
  
  - El sistema procesa la información.
  
  - Se renderiza en el DOM mostrando los datos actualizados.

**📌 Características**

  - Búsqueda de clima por nombre de ciudad
  
  - Manejo de errores (ciudad no encontrada, API caída, etc.)
  
  - Actualización dinámica de datos sin recargar la página
