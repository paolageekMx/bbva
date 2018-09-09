
 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const inegiSchema = new Schema({
  Periodo:        String,
  ComercioMayor:  Number,
  ComercioMenor:  Number,
  transporte:     Number,
  inmobiliario:   Number,
  servicios:      Number,  

 })

 const Inegi = mongoose.model("inegi",inegiSchema);
 module.exports = Inegi;