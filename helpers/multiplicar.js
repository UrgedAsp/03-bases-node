const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} 'x' ${i} '=' ${base * i}\n`;
      consola += `${colors.cyan(base)} ${"x".green} ${colors.cyan(i)} ${
        "=".green
      } ${colors.cyan(base * i)}\n`;
    }
    if (listar) {
      console.log("=====================".green);
      console.log("   Tabla del".green, colors.blue(base));
      console.log("=====================".green);
      console.log(consola);
    }
    const nombreArchivo = `./salida/tabla${base}.txt`;
    if(!fs.existsSync("salida")){
      fs.mkdirSync("salida");
    }
    fs.writeFileSync(nombreArchivo, salida);
    return `tabla${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
