export interface BooksInterface {
    isbn: number,
    bookTitle: string,
    bookAuthor: string,
    bookDescription?: string,
    bookEdition?: number,
    bookPublisher?: string,
    bookPages?: number,
    isHardcover?: boolean,
};


export const booksArray: BooksInterface[] = [
    {
        isbn: 8525062294,
        bookTitle: 'A invenção de Morel',
        bookAuthor: 'Adolfo Bioy Casares',
        bookDescription: 'Romance publicado originalmente em 1940, foi considerado por Jorge Luis Borge “uma trama perfeita”. Um cidadão venezuelano tornase recluso em uma ilha deserta para fugir de uma condenação judicial. Enquanto se alimenta de raízes psicotrópicas, o expatriado vê se apagar cada vez mais o limite entre a imaginação e a realidade. ',
        bookEdition: 1,
        bookPublisher: 'Biblioteca Azul',
        bookPages: 112,
        isHardcover: false,
    },
];
