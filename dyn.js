function mines() {
  $(".mines").children('div').children('button').css("display", "none");
  $(".mines").children('div').children('input').css("display", "none");
  $(".droids").css("display", "none");
  $(".ucost").css("display", "none");
  $(".mcost").css("display", "none");
  $(".ncost").css("display", "none");
  $(".ccost").css("display", "none");
  $(".pdroid").css("display", "none");
  $(".select").change(function() {
    var aff = $("body select:eq(0)").val();
    setTimeout('$(".mines").children("div").animate({opacity: 0}, 500, "linear")', 0);
    setTimeout(function() {
      $(".mines").children('div').css("display", "none");
      if(aff == 0)
      {
        $(".mines").children('div').css("display", "block");
        $(".droids").css("display", "none");
        $(".mines").children('div').children('button').css("display", "none");
        $(".mines").children('div').children('input').css("display", "none");
        $(".ucost").css("display", "none");
        $(".mcost").css("display", "none");
        $(".ncost").css("display", "none");
        $(".ccost").css("display", "none");
        $(".pdroid").css("display", "none");
        $(".mines").children('div').animate({opacity: 1}, 500, "linear")
      }
      if(aff == 1)
      {
        $(".mcost").css("display", "block");
        $(".mine1").children('button').css("display", "block");
        $(".mine1").css("display", "block");
        $(".mine1").animate({opacity: 1}, 500, "linear")
      }
      if(aff == 2)
      {
        $(".ccost").css("display", "block");
        $(".mine2").children('button').css("display", "block");
        $(".mine2").css("display", "block");
        $(".mine2").animate({opacity: 1}, 500, "linear")
      }
      if(aff == 4)
      {
        $(".ucost").css("display", "block");
        $(".pdroid").css("display", "block");
        $(".usine").css("display", "block");
        $(".usine").children('button').css("display", "block");
        $(".usine").css("display", "block");
        $(".usine").animate({opacity: 1}, 500, "linear")
      }
      if(aff == 5)
      {
        //$(".ucost").css("display", "block");
        $(".droids").css("display", "block");
        $(".droids").animate({opacity: 1}, 500, "linear")
      }
    }, 600);
  });
}
mines();
