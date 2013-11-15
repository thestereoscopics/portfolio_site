$(document).ready(function() {
  $(".imgLiquidFill").imgLiquid();

  $(".imgLiquidNoFill").imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "50%"
    });

  var name_html='<div id="name-box"> \
      <p class="name">Jeremy Sell<br/> \
      Web Developer<br/> \
      Hover or click on a tile!</p> \
      </div>';

  var github_message = "<p id='hover-message'>View my Projects on Github</p>"

  var stack_message = "<p id='hover-message'>Visit my Stackoverflow Profile</p>"

  var linkedin_message = "<p id='hover-message'>Connect with me on LinkedIn</p>"

  var hobbies_message = "<p id='hover-message'>Two of my Favorite Hobbies Together:<br/> \
    Photography & Travel</p>"

  var resume_message = "<p id='hover-message'>A Quick Look at my Resume</p>"

  var grocer_message = "<p id='hover-message'>Visit Grocer Ease!<br/>Helping Solve the Problem of<br/>Storing Your Recipes</p>"

  var get_carded_message = "<p id='hover-message'>Visit Get Carded!<br/>Making Flashcards</br>Just Got Simple</p>"

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