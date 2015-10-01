$(document).ready(function() {
  $(".imgLiquidFill").imgLiquid();

  $(".imgLiquidNoFill").imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "50%"
    });

  $(".photo-box").on('click', function() {
    PositionModal("#hobby-modal");
  });

  $(".resume-box").on('click', function() {
    PositionModal("#resume-modal");
    PositionModal("#technologies-modal");
  });
  

  function PositionModal(taget_modal) {
    var modal_width = 802;
    var window_width = window.innerWidth;
    var modal_position = ((window_width - modal_width) / 2);
    $(taget_modal).css("margin-left", modal_position)
  }

  var name_html='<div id="name-box"> \
      <p class="name">Jeremy Sell<br/> \
      Web Developer<br/> \
      Hover or click on a tile!</p> \
      </div>';

  var github_message = "<p id='hover-message'>View my Projects on<br/> Github</p>"

  var stack_message = "<p id='hover-message'>Visit my <br/>Stackoverflow Profile</p>"

  var linkedin_message = "<p id='hover-message'>Connect with me on <br/>LinkedIn</p>"

  var hobbies_message = "<p id='hover-message'>Two of my Favorite Hobbies:<br/> \
    Photography & Travel</p>"

  var resume_message = "<p id='hover-message'>A Little About Myself</p>"

  var grocer_message = "<p id='hover-message'>Visit Grocer Ease!<br/>Helping Solve the Problem of<br/>Storing Your Recipes<br/><span class='collaborate'>(Collaborated On)<span></p>"

  var get_carded_message = "<p id='hover-message'>Visit my Project: Get Carded!<br/>Making Flashcards</br>Just Got Simple<br/><span class='collaborate'>(Collaborated On)<span></p>"

  var email_message = "<p id='hover-message'>Want to Work on a Project?<br/>Or Looking for a Dev?</br>Email me.</p>"

  BindMessage(".gitHub", github_message);
  BindMessage(".stackOverflow", stack_message);
  BindMessage(".linkedIn", linkedin_message);
  BindMessage(".photo-box", hobbies_message);
  BindMessage(".resume-box", resume_message);
  BindMessage(".grocer-ease", grocer_message);
  BindMessage(".get-carded", get_carded_message);
  BindMessage(".email", email_message);

  function BindMessage(target_box, message) {
    $(target_box)
  .mouseenter(function() {
    $("div").remove("#name-box")
    $( "#empty-box" ).append(message);
  })
  .mouseleave(function() {
    $( "p" ).remove( "#hover-message" );
    $("#empty-box").append(name_html);
  });

  }

});