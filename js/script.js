$(document).ready(function(){
    $('.slider').bxSlider();
    
  });

$(document).ready(function(){
    
    $("#id-menu-top").click(function(){$("#glob-menu").fadeIn(1500)});
    $("#glob-menu").click(function(){$("#glob-menu").fadeOut(1500)});



    $("#id-str-menu").click(function(){$("#str-glob-menu").fadeIn(1500)});
    $("#str-glob-menu").click(function(){$("#str-glob-menu").fadeOut(1500)});
    

    $("#id-gm-menu").click(function(){$("#gm-module-menu").fadeIn(1500)});
    $("#gm-module-menu").click(function(){$("#gm-module-menu").fadeOut(1500)});


// высплывашка расчет

    $("#id-btn-cal-gl,#id-gm-calc-pk").click(function(){$("#id-b-repair-fon").fadeIn(1500)});
    $("#id-repair-cencel").click(function(){$("#id-b-repair-fon").fadeOut(1500)});

//всплывашка онлайн заявка

    $("#id-btn-cal-online,#id-gm-ord-pk").click(function(){$("#id-online").fadeIn(1500)});
    $("#id-online-cencel").click(function(){$("#id-online").fadeOut(1500)});
// для мобильных
 
// высплывашка расчет

    $("#id-m-calc,#id-btn-cal-news").click(function(){$("#id-m-b-repair-fon").fadeIn(1500)});
    $("#id-m-repair-cencel").click(function(){$("#id-m-b-repair-fon").fadeOut(1500)});



    
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


//всплывашка онлайн заявка

$(document).ready(function(){
    
    $("#id-m-calc-online").click(function(){$("#id-m-online").fadeIn(1500)});
    $("#id-m-online-cencel").click(function(){$("#id-m-online").fadeOut(1500)});

    
  }); 