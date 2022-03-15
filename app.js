"use strict"


const form = document.querySelector("form")
const $submitButton = $("#submit");
let $display = $("#display")

$submitButton.on("click", function() {
  console.log("clicked");

  //grab title and rating input value from form and crete a remove button
  const $title = $(".title").val();
  const $rating = $(".rating").val();
  let $removeButton = $("<button>");

  //add a class and text to remove button
  $removeButton
  .addClass("removeBtn")
  .text("Remove Movie");

  //create a div to append each title/rating/button to and append to the display area
  const $movie = $("<div>");

  //append info to $movie div
  $movie
  .append(`${$title} has a rating of ${$rating}   `, $removeButton);

  //append $movie div to $display
  $display
  .append($movie);

  //reset form
  form.reset();

  console.log($display)
});

//add event listener to each remove button that will be generated
$display
.on("click", (evt) => {
  console.log("remove clicked");

  //remove parent node when clicked(parentNode = $movie div)
  evt.target.parentNode.remove();
})

