$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    /*! Mask for form's input */
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999 99 99",{placeholder:""});
    };
    inputMask();

    $(document).on('click', '.ripple', function(e) {
      var $rippleElement = $('<span class="ripple-effect" />'),
        $buttonElement = $(this),
        btnOffset = $buttonElement.offset(),
        xPos = e.pageX - btnOffset.left,
        yPos = e.pageY - btnOffset.top,
        size = parseInt(Math.min($buttonElement.height(), $buttonElement.width()) * 0.5),
        animateSize = parseInt(Math.max($buttonElement.width(), $buttonElement.height()) * Math.PI);

      $rippleElement
        .css({
          top: yPos,
          left: xPos,
          width: size,
          height: size,

          backgroundColor: $buttonElement.data("ripple-color")
        })
        .appendTo($buttonElement)
        .animate({
          width: animateSize,
          height: animateSize,
          opacity: 0
        }, 500, function() {
          $(this).remove();
        });
    });

    function leadCarousel() {
      $('.carousel-lead').slick({
        arrows: true,
        dots: false,
        fade: true,
        infinite: 5000,
        autoplay: true
      });
    }
    leadCarousel();

    function anchor() {
      $('.buttons a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 500);
            return false;
          }
        }
      });
    };
    anchor();

    $('body').on('click', '.customWindow .call-popup', function(){
      $('#tekcl').trigger('click');
    });

    $('.m_steps .column').hover(function() {
      $('.m_steps .column').addClass('blured');
      $(this).toggleClass('hovered blured');
    },
    function() {
      $('.m_steps .column').removeClass('blured');
      $(this).removeClass('hovered');
    });
    $(window).load(function(){
      $('.mfp-hide').css({
        'display': 'none'
      });
    });

    console.log('Initial header.js');

    

    function popups() {

      $('.call-popup').magnificPopup({

        type: 'inline',

        fixedContentPos: false,

        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,

        preloader: false,

        midClick: true,

        removalDelay: 300,

        mainClass: 'my-mfp-zoom-in'

      });

    };

    popups();
});