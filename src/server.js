
const express = require("express");

const app = express();

app.use(express.json());

app.use("/about", express.static("about"));
app.use("/books", express.static("books"));
app.use("/contactMe", express.static("contactMe"));
app.use("/cars", express.static("cars"));
app.use("/home", express.static("home"));


// ////Get Request///////
// app.get("/book", (request, response) => {
//     // console.log(request);
//     // response.send("Hello from the book route!");
//   const book = {
//     title: "Harry Potter",
//     author: "JK Rowling",
//     genre: "fantasy"
//   };

//  const successResponse = {
//     message: "response sent successfully",
//     book: book,
//   };

//   response.send(successResponse);
// });


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

// ///// Json content code/////
// // {
// //   "title": "The Twits",
// //   "author": "Rohl Dahl",
// //   "genre": "fantasy"
// // }



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


app.listen(5001, () => console.log("Server is listening on port 5001"));