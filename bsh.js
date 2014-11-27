var books = [];

$(document).ready(function(){
  $(".addBookForm button").on("click", function(){
    var newBook = {};
    newBook.bookName = $(".addBookForm input:nth(0)").val();
    newBook.authorName = $(".addBookForm input:nth(1)").val();
    newBook.score = $(".addBookForm input:nth(2)").val();
    
    var newLi = $("<li>");
    var nameDiv = $("<div>");
    nameDiv.html(newBook.bookName);
    var authorDiv = $("<div>");
    authorDiv.html(newBook.authorName);
    var scoreDiv = $("<div>");
    scoreDiv.html(newBook.score);
    newLi.append(nameDiv).append(authorDiv).append(scoreDiv);
    $("ul").append(newLi);
    books.push(newBook);
  });
});
