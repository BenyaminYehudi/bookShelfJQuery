var books = [];

$(document).ready(function(){
  $(".addBookForm button:nth(0)").on("click", function(){
    var newBook = {};
    newBook.bookName = $(".addBookForm input:nth(0)").val();
    newBook.authorName = $(".addBookForm input:nth(1)").val();
    newBook.score = $(".addBookForm input:nth(2)").val();
    newBook.id = "book_" + new Date().getTime();
    var newLi = $("<li>");
    newLi.attr("id", newBook.id);
    var nameDiv = $("<div>");
    nameDiv.html(newBook.bookName);
    var authorDiv = $("<div>");
    authorDiv.html(newBook.authorName);
    var scoreDiv = $("<div>");
    scoreDiv.html(newBook.score);
    var xButton = $("<button>");
    xButton.html("x");
    xButton.on("click", function(){
      $("#" + newBook.id).remove();
    });
     var editButton = $("<button>");
    editButton.html("edit");
    editButton.on("click", function(){
      if ($(this).html() === "Edit") {
        var input1 = $("<input>");
      input1.attr("type", "text");
      input1.val($("#" + newBook.id + " div:nth(0)").html());
      var input2 = $("<input>");
      input2.attr("type", "text");
      input2.val($("#" + newBook.id + " div:nth(1)").html());
      var input3 = $("<input>");
      input3.attr("type", "text");
      input3.val($("#" + newBook.id + " div:nth(2)").html());
      
      $("#" + newBook.id + " div:nth(0)").html(input1);
      $("#" + newBook.id + " div:nth(1)").html(input2);
      $("#" + newBook.id + " div:nth(2)").html(input3);
      $(this).html("Save");
      } else {
        $(this).html("Edit");
      }
      
    });
    newLi.append(nameDiv).append(authorDiv).append(scoreDiv).append(xButton).append(editButton);
    $("ul").append(newLi);
    books.push(newBook);
  });
  
  $(".addBookForm button:nth(1)").on("click", function(){
    $(".addBookForm input:nth(0)").val("");
    $(".addBookForm input:nth(1)").val("");
    $(".addBookForm input:nth(2)").val("");
  });
  
  $("body button:nth(0)").on("click", function(){
    alert("You pressed the Clear List button");
  });
  
});
