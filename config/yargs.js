const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      describe: "Es la base de la tabla de multiplicar",
      demandOption: true,
    },
    l: {
      alias: "listar",
      type: "boolean",
      describe: "Muestra la tabla en consola",
      default: false,
    },
    h: {
      alias: "hasta",
      describe: "Este es el número hasta donde quieres la tabla",
      type: "number",
      default: 10,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    } else if (isNaN(argv.h)) {
      throw "El limite tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
