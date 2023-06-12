
require('dotenv').config();
 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const multer = require('multer');
const bodyParser = multer();
const router = require('./router')
 
 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use( bodyParser.none() );

require('./models/associations');
 
app.use(router);
/* app.get('/', (req, res) => {
res.send('Hello World!');
}) */
 
// middleware 404
app.use((req, res) => {
// on renvoie un objet avec des précisions sur l'erreur
res.status(404).json({
statusCode: 404,
message: 'Not Found'
});
});
 
app.listen(PORT, () => {
console.log(`Example app listening on port http://localhost:${PORT}`)
})