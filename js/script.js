const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeMenu = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    console.log('No')
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    console.log('done')
});



const counters = document.querySelectorAll('.skill__ratings-counter'),
      lines = document.querySelectorAll('.skill__ratings-line span');

counters.forEach( (item, i) => {
    lines [i].style.width = item.innerHTML;
});


$('.modali__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });


$(document).ready(function(){
    function validateForms(form) {
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            policy: {
                required: true,
            },
          },
          messages: {
            name: {
              required: "Пожалуйста, введите своё имя",
              minlength: jQuery.validator.format("Введите {0} символов")
            },
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            policy: {
                required: "Обязательно необходимо согласие",
                policy: "Обязательно необходимо согласие"
              }
        }
    });
      };
      validateForms('#consultation-form');


      $('form').submit(function(e) {
        e.preventDefault();
        if (! $(this).valid()) {
            return;
            }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            console.log('Получилось')
            $('form').trigger('reset');
        });
        return false;
    });

}); 