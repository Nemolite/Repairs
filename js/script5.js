$(document).ready(function(){
    $('.slider').bxSlider();
    
  });

$(document).ready(function(){
    
    $("#id-menu").click(function(){$("#glob-menu").fadeIn(1500)});
    $("#glob-menu").click(function(){$("#glob-menu").fadeOut(1500)});


    $("#id-gm-menu").click(function(){$("#gm-module-menu").fadeIn(1500)});
    $("#gm-module-menu").click(function(){$("#gm-module-menu").fadeOut(1500)});
    
  });

// скорлинг, появление меню

jQuery(function(f){
    var element = f('#id-btn-modul');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 750 ? 'In': 'Out')](500);           
    });
}); 


// плавный скрол вниз из меню

$(document).ready(function(){
    $("#glob-menu,#gm-module-menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});