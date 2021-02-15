const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
 
const cats= [
   { id: 1, name: 'John', age: 15 },
   { id: 2, name: 'Maew', age: 20 }]


   


 
app.use(cors())
 
app.get('/', (req,res) => {
   res.json(cats)
})
 
app.listen(PORT, () => console.log(`listen at ${PORT}`))