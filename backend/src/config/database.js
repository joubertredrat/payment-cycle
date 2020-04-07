const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/my-money', { useNewUrlParser: true })

mongoose.Error.messages.general.required =
  "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
  "{PATH}: O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
  "{PATH}: O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
  "{PATH}: O '{VALUE}' não é válido."
