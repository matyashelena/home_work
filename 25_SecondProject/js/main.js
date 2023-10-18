$(document).ready(function () {
  $('.hero_slider-vertical').slick({
    // dots: true,
    infinite: true,
    // speed: 1000,
    // fade: true,
    // vertical: true,
    // verticalSwiping: true,
    // cssEase: 'linear',
    // arrows:false,
    // dots: true,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 2000,
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
  });

  $('.news_cards').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // $('#lightgallery').lightGallery({
  //   plugins: [lgZoom, lgThumbnail],
  // });

  let scrollToSection = function() {
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
      );
    }
    return false;
  };

  $('.header_menu-link').on("click", scrollToSection);

  $('.scroll_down').on("click", scrollToSection);

  $('.scrool_map').on("click", scrollToSection);

  let element = document.getElementById('hero').getBoundingClientRect();
  // let positionInfo = element.
  let height = element.height - 80;
  console.log(element);
  console.log(height);

  
    // let element = document.getElementById('hero').getBoundingClientRect();
    // let height = element.height / 5;

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > height) {
        $(".header").addClass("active");
        // console.log(window.screenTop());
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
      }
  });

  $('.map').on('click', function initMap() {

    const map = L.map('my-map').setView([50.00317690860705, 36.226601536338116], 15);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
    }).addTo(map);
    

    let customIcon = L.icon({
      iconUrl: './img/marker.svg',
  
      iconSize:     [106, 106], // size of the icon
      
  });
    L.marker([50.00181420905747, 36.23288158444743], {
        icon: customIcon
      }).addTo(map)
      .bindPopup('My Lovely Location')
      .openPopup();
      
      // $('.map').off('click', function initMap());
  });
  


});


lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  // licenseKey: 'your_license_key',
  speed: 500,
  // ... other settings
});

// MAP
// const customIcon = L.icon({
//   iconBorderRadius: [50],
//   iconUrl: 'https://static-00.iconduck.com/assets.00/map-pin-icon-384x512-m24sswd5.png',

//   iconSize: [106, 106], // size of the icon
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });