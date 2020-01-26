const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
// Middleware para la subida de ficheros.
app.use(fileUpload());

app.post('/upload', (req, res) => {
    
    //Verificamos que haya archivos que se esten  subiendo.
    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: "No se encontro ningun archivo en la subida."
            }
        });
    }

    //Guardamos el fichero en la variable exampleFile
    let exampleFile = req.files.exampleFile;


    exampleFile.mv('/directorio1/archivo.jpg', (err) => {
        if (err) {
            //Si se encuentra un error a la hora de mover el fichero 
            //Enviamos un error con el codigo 500.
            res.status(500).json({ok:false, err});
        }   
        //Si fue todo OK devolvemos que el fichero fue subido con exito.
        res.status(200).json({ok:true, messaje: 'Imagen subida correctamente'});
    });



}); 


app.listen(3000, function () {
    console.log('Apliccion de ejemplo escuchando en el puerto 3000');
  });