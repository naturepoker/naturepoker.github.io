$('document').ready(function () {
	$("body").easeScroll({
  frameRate: 30,
  animationTime: 500,
  stepSize: 60,
  pulseAlgorithm: !0,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 10,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 25
});

    
    //barba
    var transEffect = Barba.BaseTransition.extend({
        start: function () {
            this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
        },
        fadeInNewcontent: function (nc) {
            nc.hide();
            var _this = this;
            $(this.oldContainer).fadeOut(1000).promise().done(() => {
                nc.css('visibility', 'visible');
                nc.fadeIn(1000, function () {
                    _this.done();
                })
            });
        }
    });
    Barba.Pjax.getTransition = function () {
        return transEffect;
    }

    Barba.Pjax.start();

     Barba.Dispatcher.on('newPageReady', function() {
        window.scrollTo(0, 0);   
    });
    
    
    $(window).on('scroll', function() {
    if(window.pageYOffset > 50) {
      $("h2").addClass("go");
    }else
      $("h2").removeClass("go");
});
    
    $(a).on("click", function () {
        $('html, body').animate({ scrollTop: $('#barba-wrapper').offset().top }, 'slow');
        return false;
            });
    
});




