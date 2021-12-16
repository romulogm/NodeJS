import { BooksInterface, booksArray } from "./books";

export const getAllBooks = async (): Promise<BooksInterface[]> => {
    return booksArray;
};

export const createBooks = async (book:BooksInterface): Promise<void> => { 
    booksArray.push(book);  
}

export const updateBooks = async (book:BooksInterface): Promise<void> => { 
    let index = booksArray.findIndex(d => d.isbn === book['isbn']);
    if(index >0 || index==0)
   {
    booksArray[index]['isbn'] = book['isbn'];
    booksArray[index]['bookTitle'] = book['bookTitle'];
    booksArray[index]['bookAuthor'] = book['bookAuthor'];
    booksArray[index]['bookDescription'] = book['bookDescription'];
   }
}

export const deleteBook = async (isbn:number): Promise<void> => { 
    console.log(`in delete product index is ${JSON.stringify(isbn)}`)
    let index = booksArray.findIndex(d => d.isbn === isbn);
    console.log(`in delete product index is ${index}`)
    if(index >0 || index==0)
    booksArray.splice(index, 1);
};
