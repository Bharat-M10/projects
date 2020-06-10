 $(function(){
     $(".O").hover(function(){
       $(this).attr("src","pics/order-1.jpg");
     },
     function(){
       $(this).attr("src","pics/order-2.jpg");
     });

     $('.order-now').click(function() {
         $('html,body').animate({scrollTop:0});
         $('.pop-form').fadeToggle();
       })
       $(document).mouseup(function (e) {
         var container = $(".pop-form");

         if (!container.is(e.target)
             && container.has(e.target).length === 0)
         {
             container.fadeOut();
         }
         });


      $('.apple').click(function(){
    $('.tick-1').fadeToggle();
    });

       $('.banana').click(function(){
        $('.tick-2').fadeToggle();
        });

      $('.berry').click(function(){
      $('.tick-3').fadeToggle();
      });

      $('.cherry').click(function(){
      $('.tick-4').fadeToggle();
      });

      $('.grapes').click(function(){
      $('.tick-5').fadeToggle();
      });

      $('.guvava').click(function(){
      $('.tick-6').fadeToggle();
      });

      $('.mango').click(function(){
      $('.tick-7').fadeToggle();
      });

      $('.melon').click(function(){
      $('.tick-8').fadeToggle();
      });

      $('.orange').click(function(){
      $('.tick-9').fadeToggle();
      });

      $('.peache').click(function(){
      $('.tick-10').fadeToggle();
      });

      $('.pineapple').click(function(){
      $('.tick-11').fadeToggle();
      });

      $('.strawberry').click(function(){
      $('.tick-12').fadeToggle();
      });



     $(".btn-1").click(function(){
       $(".btn-1").hide();
       $(".btn-2").show();
     });

     $(".btn-2").click(function(){
       $(".btn-2").hide();
       $(".btn-1").show();
     });


     $(".formbtn").click(function(){
       $(".front").hide();
       $(".main").show();
     });

     $(".b").click(function(){
       $(".main").hide();
       $(".front").show();
     });



 });
