const sqlite3= require('sqlite3').verbose()
const dbName = 'myDatabase.db'
let db=new sqlite3.Database(dbName, (err)=>{
    if(err){
        console.error(err.message)
    }
    else{
        console.log("connected to the database")
        db.run('CREATE TABLE IF NOT EXISTS bookstore(id INTEGER,title STRING,author STRING, genre STRING, price FLOAT)',(err)=> {
            if(err){
            console.error(err.message)
            }
            else{
             console.log('TABLE CREATED OR EXISTS')
            }
            }
        )
    }
})
module.exports=db
