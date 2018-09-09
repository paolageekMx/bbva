const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bieSchema = new Schema({
  Periodo:        String,
  ComercioMayor:  Number,
  ComercioMenor:  Number,
  Transporte:     Number,
  Inmobiliario:   Number,
  Servicios:      Number,
})

const Bie = mongoose.model("bie",bieSchema);
module.exports = Bie;