const express= require('express')

const {addbook,deletebook,updatebook,findbook}=require('./CRUD')

const app=express();

app.use(express.json())

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id; // Extracting id from the request URL
    findbook(id, (err, book) => {
        if (err) {
            res.status(500).send(err.message);
        } else if (!book) {
            res.send(`Book with id: ${id} was not found`);
        } else {
            res.status(200).json(book);
        }
    });
});




app.post('/api/book',(req,res)=>{
    const{id, title, author, genre, price}=req.body
    addbook(id, title, author, genre, price,(err,data)=>{
        if(err){
            res.status(500).send(err.message)
        }
        else if (!book) {
            res.status(404).send(`Book with id: ${id} was not found`);
        }
        else{
            res.status(201).json(data)
        }
    })
})


app.put('/api/book/:id', (req, res) => {
    const id = req.params.id;
    const { title, author, genre, price } = req.body;
    updatebook(id, title, author, genre, price, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (!data) {
            res.status(404).send(`Book with id: ${id} was not found`);
        } else {
            res.status(200).json(data);
        }
    });
});

app.delete('/api/book/:id', (req, res) => {
    const id = req.params.id;
    deletebook(id, (err, deletedBook) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send('Book Records Deleted');
        }
    });
});

app.listen(5000,()=>{
    console.log('server is running')
})
