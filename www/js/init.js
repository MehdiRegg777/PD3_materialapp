(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.tabs').tabs({"swipeable":true});

$(document).ready(function() {
  $('.tabs').tabs({"swipeable":true});

  // Realizar una solicitud GET a la API
  $.get("https://api.spaceflightnewsapi.net/v3/articles", function(data) {
      // Obtener un arreglo de 10 índices aleatorios
      var randomIndexes = generateRandomIndexes(data.length, 10);
      
      // Iterar sobre los índices aleatorios y mostrar los títulos correspondientes
      $.each(randomIndexes, function(index, randomIndex) {
          // Obtener el artículo correspondiente al índice aleatorio
          var article = data[randomIndex];
          // Crear un elemento <li> para cada título de noticia y agregarlo a la lista
          var $li = $("<li class='collection-item'></li>");
          var $title = $("<span class='title'></span>").text(article.title).css("cursor", "pointer");
          // Almacenar el artículo como un atributo de datos en el título del artículo
          // Agregar un icono a la derecha del título
          var $icon = $("<i class='material-icons right' style='cursor:pointer;'>arrow_forward</i>");
          $icon.on("click", function() {
              // Obtener el artículo del atributo de datos
              var clickedArticle = $(this).closest("li").find(".title").data("article");
              console.log(clickedArticle); // Agrega esta línea para imprimir el objeto clickedArticle en la consola
              // Construir la estructura HTML del artículo
              var articleHTML = `
                <div class="article">
                  <h2 class="article-title">${clickedArticle.title}</h2>
                  <p class="article-summary">${clickedArticle.summary}</p>
                  <img class="article-image" src="${clickedArticle.imageUrl}" alt="Article Image">
                  <p class="article-details">Published at: ${clickedArticle.publishedAt}</p>
                  <p class="article-details">Updated at: ${clickedArticle.updatedAt}</p>
                  <p class="article-details">News Site: ${clickedArticle.newsSite}</p>
                  <a class="article-link" href="${clickedArticle.url}" target="_blank">Read More</a>
                </div>
              `;
              
              // Imprimir la estructura HTML del artículo en el contenedor de contenido del artículo
              $("#article-content").html(articleHTML);
          
              // Cambiar a la segunda pestaña
              $('.tabs').tabs('select', 'test-swipe-2');
          });
          $li.append($icon);
          $("#article-list").append($li);
          $title.on("click", function() {
              // Obtener el artículo del atributo de datos
              var clickedArticle = $(this).data("article");
              console.log(clickedArticle); // Agrega esta línea para imprimir el objeto clickedArticle en la consola

              // Construir la estructura HTML del artículo
              var articleHTML = `
                <div class="article">
                  <h2 class="article-title">${clickedArticle.title}</h2>
                  <p class="article-summary">${clickedArticle.summary}</p>
                  <img class="article-image" src="${clickedArticle.imageUrl}" alt="Article Image">
                  <p class="article-details">Published at: ${clickedArticle.publishedAt}</p>
                  <p class="article-details">Updated at: ${clickedArticle.updatedAt}</p>
                  <p class="article-details">News Site: ${clickedArticle.newsSite}</p>
                  <a class="article-link" href="${clickedArticle.url}" target="_blank">Read More</a>
                </div>
              `;
              
              // Imprimir la estructura HTML del artículo en el contenedor de contenido del artículo
              $("#article-content").html(articleHTML);
          
              // Cambiar a la segunda pestaña
              $('.tabs').tabs('select', 'test-swipe-2');
          });
          $title.data("article", article);

          $li.append($title);


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