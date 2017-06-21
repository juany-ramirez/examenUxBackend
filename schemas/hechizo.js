var mongoose = require('mongoose');

var HechizoSchema = new mongoose.Schema({
  nombre : String,
  dificultad : String,
  aprendizaje : Number
});

module.exports = mongoose.model('hechizo', HechizoSchema);
