const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();



const routes = require('./routes');

//HTTP methods: GET, POST, PUT, DELETE
// Parameters type:

// Query params: access: request.query (we use in filters, order, pagination, etc...)   | ex: http://localhost:3000/users?name=joao
// Route params: access: request.params | ex(insomnia/postman): http://localhost:3000/users/2   | ex(visual studio): app.put('/users/:id', (req, res) => {.....}  | (often used to identity a resource in modification or remotion | HTTP: PUT OR DELETE normally)
// Body: acess: request.body | ex(insomnia); {"name", "joao"}  | HTTP methods: POST normally


//mongoDb
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}, () => {
    console.log("Database connected");
});



app.use(cors());
app.use(express.json());    // add this line to make POST method work with body params | we need this line before app.use(routes) to make JSON body params work on that file
app.use(routes);




app.listen(3001, () => {
    console.log(`Server is running...`)
})