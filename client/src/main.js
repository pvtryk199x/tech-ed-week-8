const resContainer = document.getElementById("response_container");
const resButton = document.getElementById("get-things");

async function getBooks() {
  
  const response = await fetch(
    "http://localhost:8080/books"
  );
 
  const booksData = await response.json();
 
  console.log(booksData);

}


resButton.addEventListener("click", getBooks);
