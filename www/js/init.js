(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.tabs').tabs({"swipeable":true});

$(document).ready(function() {
  // Realizar una solicitud GET a la API
  $.get("https://api.spaceflightnewsapi.net/v3/articles", function(data) {
      // Obtener un arreglo de 10 índices aleatorios
      var randomIndexes = generateRandomIndexes(data.length, 10);
      
      // Iterar sobre los índices aleatorios y mostrar los títulos correspondientes
      $.each(randomIndexes, function(index, randomIndex) {
          // Obtener el artículo correspondiente al índice aleatorio
          var article = data[randomIndex];
          // Crear un elemento <li> para cada título de noticia y agregarlo a la lista
          $("#article-list").append("<li class='collection-item'>" + article.title + "</li>");
      });
  });
});

// Función para generar 10 índices aleatorios
function generateRandomIndexes(max, count) {
  var indexes = [];
  while (indexes.length < count) {
      var randomIndex = Math.floor(Math.random() * max);
      if (indexes.indexOf(randomIndex) === -1) {
          indexes.push(randomIndex);
      }
  }
  return indexes;
}