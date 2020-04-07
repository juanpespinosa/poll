/*
 * Controlador
 */
var Controlador = function (modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function (pregunta, respuestas) {
    this.modelo.agregarPregunta(pregunta, respuestas);
  },

  borrarPregunta: function (id) {
    this.modelo.borrarPregunta(id);
  },

  borrarTodo: function () {
    if (confirm("Esta por borrar todas las preguntas. Esta seguro?")) {
      this.modelo.borrarTodo();
    }
  },

  editarPregunta: function (id) {
    this.modelo.editarPregunta(id);
  },

  agregarVoto: function (nombrePregunta, respuestaSeleccionada) {
    if (respuestaSeleccionada) {
      this.modelo.agregarVoto(nombrePregunta, respuestaSeleccionada);
    }
  }

};
