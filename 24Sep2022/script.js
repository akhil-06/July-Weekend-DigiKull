// console.log("Hello World!!!");
// $("#para1").html("JS is amazing");
// $("#para2").html("digikull sessions");
// $("#para2").hide();
// $("#para2").width(100);

// $("div").css({
//     height: "40px",
//     width: "40px",
//     backgroundColor:"cyan"
// })

// $("div").on('click',function () {
//     alert("Div is clicked");
//     var elem = $(this);
//     console.log(elem);
//     elem.width(elem.width() + 10 + "px");

// })


function fetchRandomImage() {
    // var xhrRequest = new XMLHttpRequest();
    // xhrRequest.onload = function () {
    //     // console.log(xhrRequest.response);
    //     var reponseJson = JSON.parse(xhrRequest.response);
    //     console.log(reponseJson);
    //     var imageUrl = reponseJson.message;
    //     $("#dog-image").attr('src', imageUrl);
    // }

    // xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random");
    // xhrRequest.send();




    // $.get("https://dog.ceo/api/breeds/image/random", function (reponseJson) {
    //     $("#dog-image").attr("src", reponseJson.message);
    // });


    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
        success: function (reponseJson) {
          console.log(reponseJson);
        $("#dog-image").attr("src", reponseJson.message);
      },
    });

}


$("#fetch-dog").click(fetchRandomImage);

















