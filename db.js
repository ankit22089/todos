const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://crudDB:crudDB@cluster0.f2sqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then( () => console.log("connection successfull.....") )
.catch( (err) => console.log(err));

module.exports = mongoose;