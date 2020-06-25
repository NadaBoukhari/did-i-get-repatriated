const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

//ROUTES

//create an update

app.post('/updates', async(req,res) =>{
    try {
        const {update_text} = req.body;
        const newUpdateText = await pool.query("INSERT INTO daily_update (update_text) VALUES ($1) RETURNING *",[update_text]);
        res.json(newUpdateText.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all updates

app.get('/updates', async (req,res) =>{
    try {
        const allUpdates = await pool.query("SELECT * FROM daily_update");
        res.json(allUpdates.rows);
    } catch (err) {
        console.error(err.mesage);
    }
})

//get an update

app.get('/updates/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const update = await pool.query("SELECT * FROM daily_update WHERE id=$1",[id]);
        res.json(update.rows[0]);
    } catch (error) {
        console.error(err.message)
    }
})

//update an update

app.put('/updates/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const {update_text} = req.body;
        const editUpdate = await pool.query("UPDATE daily_update SET update_text =$1 WHERE id =$2",[update_text, id]);
        res.json("Update was edited");

    } catch (err) {
        console.log(err.message);
    }
})

//delete an update

app.delete('/updates/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteUpdate = await pool.query("DELETE FROM daily_update WHERE id=$1", [id]);
        res.json("Update was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () =>{
    console.log('Server has started on port 5000');
});