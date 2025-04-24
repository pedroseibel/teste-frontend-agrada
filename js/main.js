$(document).ready(function() {
  // Inicializa o Slick
  if ($('.product-carousel').length > 0) {
    $('.product-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/ÍCONE SETA ESQUERDA.svg" alt="Anterior"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/ÍCONE SETA DIREITA.svg" alt="Próxima"></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 800,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        }
      ]
    });

    var $vitrine1 = $('.vitrine-1');
    var $bannersRow = $('.banners-row');
    if ($vitrine1.length > 0 && $bannersRow.length > 0) {
      $vitrine1.slick('unslick');
      var $clone = $vitrine1.clone();
      $clone.removeClass('vitrine-1').addClass('vitrine-2');
      $bannersRow.after($clone);
      $clone.before('<div class="carousel-title" style="margin-top:56px;">Vitrine de produtos da Agrada Digital</div>');
      $vitrine1.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/ÍCONE SETA ESQUERDA.svg" alt="Anterior"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/ÍCONE SETA DIREITA.svg" alt="Próxima"></button>',
        responsive: [
          { breakpoint: 1100, settings: { slidesToShow: 3 } },
          { breakpoint: 800, settings: { slidesToShow: 2 } },
          { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
      });
      $clone.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/ÍCONE SETA ESQUERDA.svg" alt="Anterior"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/ÍCONE SETA DIREITA.svg" alt="Próxima"></button>',
        responsive: [
          { breakpoint: 1100, settings: { slidesToShow: 3 } },
          { breakpoint: 800, settings: { slidesToShow: 2 } },
          { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
      });
    }
  }

  // Modal que aparece ao clicar em comprar
  if ($('.modal-cart').length === 0) {
    $('body').append('<div class="modal-cart"><div class="modal-content">Produto adicionado ao carrinho!</div></div>');
  }
  // Carrinho: atualizar badge e salvar no localStorage
function updateCartBadge() {
  var count = Number(localStorage.getItem('cartCount')) || 0;
  var $badge = $('#cart-badge');
  if (count > 0) {
    $badge.text(count).show();
  } else {
    $badge.hide();
  }
}

// Ao clicar em comprar
$(document).on('click', '.btn-buy', function(e) {
  e.preventDefault();
  // Atualiza contador do carrinho
  var count = Number(localStorage.getItem('cartCount')) || 0;
  count++;
  localStorage.setItem('cartCount', count);
  updateCartBadge();
  // Modal
  var $modal = $('.modal-cart');
  $modal.addClass('show');
  setTimeout(function() {
    $modal.removeClass('show');
  }, 1500);
});

// Inicializa badge ao carregar página
updateCartBadge();
});
