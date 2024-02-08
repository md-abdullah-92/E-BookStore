const db=require('./database')

//ADD BOOks
const addbook = (id, title, author, genre, price, callback) => {
    const sql = 'INSERT INTO bookstore (id, title, author, genre, price) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [id, title, author, genre, price], function(err) {
        if (err) {
            callback(err);
        } else {
            // Fetch the inserted row from the database
            const selectSql = 'SELECT * FROM bookstore WHERE id = ?';
            db.get(selectSql, [id], function(err, row) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, row); // Return the inserted row
                }
            });
        }
    });
};


// Update Book
const updatebook = (id, title, author, genre, price, callback) => {
    const sql = 'UPDATE bookstore SET title=?, author=?, genre=?, price=? WHERE id=?';
    db.run(sql, [title, author, genre, price, id], function(err) {
        if (err) {
            callback(err);
        } else {
            // Fetch the updated row from the database
            const selectSql = 'SELECT * FROM bookstore WHERE id=?';
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
    const sql = 'SELECT * FROM bookstore WHERE id=?';
    db.get(sql, [id], callback);
};

//Fetch All Book 
const fetchallbook=(callback)=>{
    const sql = 'SELECT * FROM bookstore';
    db.all(sql, [], callback);
}
//delete book 
const deletebook = (id,callback) => {
    const sql = 'DELETE FROM bookstore WHERE id=?';
    db.run(sql, [id],callback);
};
module.exports={addbook,updatebook,findbook,deletebook,fetchallbook}

