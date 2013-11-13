$(document).ready(function() {
  $(".imgLiquidFill").imgLiquid();

  $(".imgLiquidNoFill").imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "50%"
    });

  $(".empty-box").on('click', function(e){
    e.preventDefault();

  });

});