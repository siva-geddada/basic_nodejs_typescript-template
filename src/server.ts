import express from 'express';
import { connectDB } from './db/db'


connectDB()
const app = express();
app.use(express.json()); 
app.get('/api/', (req, res) =>{
    res.json({
        name: 'SivaGeddada',
        id: 1
    });
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

