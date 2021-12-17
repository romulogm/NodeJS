import { BooksInterface } from './books';
import booksMongooseModel from './schema';
import schemaBooks from './schema';

export const getBooksList = async (req:any, res:any) => {
    booksMongooseModel.find((err: any, result: any) => {
        if (err) {
          res.send(console.log(err));
        } else {
        console.log(JSON.stringify(result));
          res.send(result);
        }
      });
  };

export const createBook = async (req:any, res:any) => {
  const request: BooksInterface =  req.body;
  let newbook = new booksMongooseModel(request); 
  await newbook.save((err:any, result:any) => {
      if (err) {
          res.send(console.log(err));
          
        } else {
          console.log(JSON.stringify(result));
          res.send(result);
        }
  });
};

export const deleteBook = async (req:any, res:any) => {
  const request: BooksInterface =  req.body;
  booksMongooseModel.findOneAndRemove(request, (err:any, result:any) => {
    if (err) {
        res.send(console.log(err));
        
      } else {
        console.log(JSON.stringify(result));
        res.send(result);
      }})};


export const updateBook = async (req:any, res:any) => {
  const request: BooksInterface =  req.body;
  booksMongooseModel.findOneAndReplace(request, request, { new: true }, (err: any, result: any) => {
    if (err) {
    res.send(console.log(err));
    } else {
    res.send(result);
    }});
};
