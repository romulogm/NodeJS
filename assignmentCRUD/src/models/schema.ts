import { BooksInterface } from "./books";
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const schemaBooks = new Schema<BooksInterface>({
    isbn: { type: Number, required: false },
    bookTitle: { type: String, required: false },
    bookAuthor: { type: String, required: false },
    bookDescription: { type: String, required: false },
    bookEdition: { type: Number, required: false },
    bookPublisher: { type: String, required: false },
    bookPages: { type: Number, required: false },
    isHardcover: { type: Boolean, required: false },
  });

  const booksMongooseModel = mongoose.model("booksMongooseModel", schemaBooks);
  
  export default booksMongooseModel;