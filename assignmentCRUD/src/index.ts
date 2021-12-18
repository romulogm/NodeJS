import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import helmet from "helmet";
import * as bookCRUD from './models/bookscrud';
import morgan from 'morgan';

//RUN SERVER 

const app = express();

if (!8080) {
  console.log(`Error to get ports`);
    process.exit(1);
 }

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port 8080`);
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));



// DB CONNECTION

const uri = 'mongodb://host.docker.internal:27017/mongodatabase';

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Connected to MONGO`);
  }
});




// ROUTES

const authorisedRoute = express.Router();
app.use("/api", authorisedRoute);


app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

  next();
});


authorisedRoute.get('/', (req, res) => res.send('Welcome to Books CRUD...'));
authorisedRoute.get('/getbookslist', bookCRUD.getBooksList);
authorisedRoute.post('/createbook', bookCRUD.createBook);
authorisedRoute.patch('/updateBook',bookCRUD.updateBook);
authorisedRoute.delete('/deleteBook',bookCRUD.deleteBook);