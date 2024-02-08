const db=require('./database')

//ADD BOOks
const addbook=(id,title,author,genre,price,callback)=>{
    const sql='INSERT INTO items (id,title,author,genre,price) VALUES (?,?,?,?,?)'
    db.run(sql,[id,title,author,genre,price],callback
    )
}

// Update Book
const updatebook = (id, title, author, genre, price, callback) => {
    const sql = 'UPDATE items SET title=?, author=?, genre=?, price=? WHERE id=?';
    db.run(sql, [title, author, genre, price, id], function(err) {
        if (err) {
            callback(err);
        } else {
            // Fetch the updated row from the database
            const selectSql = 'SELECT * FROM items WHERE id=?';
            db.get(selectSql, [id], function(err, row) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, row); // Return the updated row
                }
            });
        }
    });
};


//Find book 
const findbook = (id, callback) => {
    const sql = 'SELECT * FROM items WHERE id=?';
    db.get(sql, [id], callback);
};


//delete book 
const deletebook = (id,callback) => {
    const sql = 'DELETE FROM items WHERE id=?';
    db.run(sql, [id],callback);
};
module.exports={addbook,updatebook,findbook,deletebook}

