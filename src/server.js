require("dotenv").config();
// console.log(process.env);

require ("./db/connections")
const express = require("express");

const Book = require ("./books/model");



const app = express();

app.use(express.json());

// app.use("/about", express.static("about"));
// app.use("/books", express.static("books"));
// app.use("/contactMe", express.static("contactMe"));
// app.use("/cars", express.static("cars"));
// app.use("/home", express.static("home"));


// ////Get Request///////
app.get("/book", (request, response) => {
    // console.log(request);
    // response.send("Hello from the book route!");
  const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    genre: "fantasy"
  };

 const successResponse = {
    message: "response sent successfully",
    book: book,
  };

  response.send(successResponse);
});


// ////Get Request 2///////
// app.get("/book", (request, response) => {
  
// const book = {
//   title: "The Twits",
//   author: "Rohl Dahl",
//   genre: "fantasy",
// };

// const successResponse = {
//   message: "response sent successfully",
//   book: book,
// };

// response.send(successResponse);
// });



// ////Post Request///////
// app.post("/book", (request, response) => {
//     // console.log(request.body);
//     // response.send("Hello from the post route!");

//   const newBook = {
//     id: Math.floor(Math.random() * 50),
//     title: request.body.title,
//     author: request.body.author,
//     genre: request.body.genre,
//   };

//   const successResponse = {
//     message: "Successfully added to DB",
//     newBook: newBook,
//   };

//   response.send(successResponse);
// });

/// Json content code/////
// {
//   "title": "The Twits",
//   "author": "Rohl Dahl",
//   "genre": "fantasy"
// }



// ////Post Request 2/////

// app.post("/DVD", (request, response) => {
//   // console.log(request.body);
//   // response.send("Hello from the post route!");

// const newDVD = {
//   id: Math.floor(Math.random() * 50),
//   title: request.body.title,
//   actor: request.body.actor,
  
// };

// const successResponse = {
//   message: "Successfully added to DB",
//   newDVD: newDVD,
// };

// ///// Json content code/////
// // {
// //   "title": "The Persuite of Happiness",
// //   "actor": "Will Smith"
// // }

// response.send(successResponse);
// });



////Post Request///////
app.post("/books/addbook", async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "Successfully added to DB",
    newBook: newBook,
  };

  response.send(successResponse);
});



////Get Request//////
app.get("/books/getallbooks", async (request, response) => {
    console.log (request)
    const allBooks = await Book.find({});
  
    console.log(allBooks);
  
    const successResponse = {
      message: "response sent successfully",
      books: allBooks,
    };
  
    response.json(successResponse);
  });



//////Update one//////

app.put("/books/updatebookauthor", async (request, response) => {
  //     // console.log(request);
     

      const updatedBook = await Book.updateOne(
      {"author": "J>D> Salinger"},
      {"author": "J.D. Salinger"});
      console.log (updatedBook)
      
      response.send({message: "success!", updatedBook: updatedBook});
    
  });

app.delete ("/books/Delete", async (resuest, response) => {
  const deleteBook = await Book.deleteOne ({title:resuest.body.title})
  const successResponse = {
    message: "Successfully Deleted",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
})

app.listen(5001, () => console.log("Server is listening on port 5001"));


//  {
//     title: "Harry Potter",
//     author: "JK Rowling",
//     genre: "fantasy"
//   };
// {
//     "title": "title",
//     "author": "author",
//     "genre": "genre"
//   }
