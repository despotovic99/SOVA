
function openForm() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("popup").style.display = "none";
  }

  
  $(document).ready(function(){
    $(".open-button").click(function(){
    $("#jezikPolje").val($(this).attr("name"));
    })
  })

  $(document).ready(function(){
    $(".open-button").hover(function(){
      $(this).animate({width:"150px", height: "50px"}, 500);
    }, function(){
      $(this).animate({width:"100px", height: "30px"}, 500);
    })
  })

  $(document).ready(function() {
    $("#forma").validate();
    });


  