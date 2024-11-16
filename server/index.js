const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/bookRoutes');


require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>
    console.log("MOngoDb connected")
).catch(err => console.error(err));

app.get('/', (req, res) => res.send('Library Management System API'));

app.use('/api', bookRoutes);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})