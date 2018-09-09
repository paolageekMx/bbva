const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saldoSchema = new Schema({
  nb_sector:      String,
  nb_actividad:   String,
  fh_antiguedad:  String,
  IM_SDO_201608:  Number,
  IM_SDO_201609:  Number,
  IM_SDO_201610:  Number,
  IM_SDO_201611:  Number,
  IM_SDO_201612:  Number,
  IM_SDO_201701:  Number,
  IM_SDO_201702:  Number,
  IM_SDO_201703:  Number,
  IM_SDO_201704:  Number,
  IM_SDO_201705:  Number,
  IM_SDO_201706:  Number,
  IM_SDO_201707:  Number,
  IM_SDO_201708:  Number,
  IM_SDO_201709:  Number,
  IM_SDO_201710:  Number,
  IM_SDO_201711:  Number,
  IM_SDO_201712:  Number,
  IM_SDO_201801:  Number,
  IM_SDO_201802:  Number,
  IM_SDO_201803:  Number,
  IM_SDO_201804:  Number,
  IM_SDO_201805:  Number,
  IM_SDO_201806:  Number,
  IM_SDO_201807:  Number,
  OTROS_Q1:       Number,
  OTROS_Q2:       Number,
  OTROS_Q3:       Number,
  OTROS_Q4:       Number,
  VTAS_TOTALES:   Number,
  PROYECCION:     Number,
  RFC:            String,
  NB_CALLE:       String,
  NB_COLONIA:     String,
  NU_EXTERIOR:    String,
  NU_DEPTO:       String,
  NB_MPIO_DEL:    String,
  CD_ESTADO:      String,
  CD_POSTAL:      String,
  NB_EMPRESA:     String,
  NU_CTE:         String,
  
})

const Saldo = mongoose.model("Saldos",saldoSchema);

module.exports = Saldo;