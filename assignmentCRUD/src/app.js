import * as express from 'express'
import * as mongoose from 'mongoose'

const app = express()

const PORT = 8080

// THIS STRING IS THE LINK TO OUR MONGODB
const url = 'mongodb://localhost:27017'


// mongodb connection
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(result => app.listen(PORT, () => console.log(`app running on port ${PORT}`)))
.catch(err => console.log(err))


app.get('/', (req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
})

app.listen(PORT, () => console.log(`app running on port ${PORT}`))