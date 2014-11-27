$(document).ready(function(){
  $(".addBookForm button:nth(0)")on("click", function(){
  var newBook = {};
  newBook.bookName= $(".addBookForm input:nth(0)").val();
  newBook.authorName= $(".addBookForm input:nth(1)").val();
  newBook.score= $(".addBookForm input:nth(2)").val();
  };
};
