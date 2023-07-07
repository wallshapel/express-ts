import { Request } from 'express';
import multer from 'multer';
import path from 'path';

// Este middleware no requiere del response ni del next

// Configuramos multer
const storage = multer.diskStorage(
    {
    	destination: path.join(__dirname, '../public/uploads'), // La ruta se forma a partir de la ubicación de este archivo de código.
        filename: (_req: Request, file: Express.Multer.File, cb: any) => {
    		cb(null, Buffer.from(file.originalname, 'latin1').toString('utf8')); // Con la función Buffer
        }
    });

const multerMiddleware = multer(
    {
        storage,
        fileFilter: (_req: Request, file: Express.Multer.File, cb: any) => { // Nos permite validar la extensión del archivo
        	const filetypes = /jpeg|jpg|png|gif/; // Expresión regular de la extensiones deseadas
            const mimetype = filetypes.test(file.mimetype); // Obtenemos el mimetype del archivo subido. El mimetype de una imagen jpg por ejemplo es: image/jpg
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Obtenemos la extensión del archivo subido sin el punto 
            if (mimetype && extname) return cb(null, true);
            cb('Error: File upload only supports the following filetypes: ' + filetypes);	
        },
        limits: { fileSize: 1000000 } // El archivo no puede pesar más de 1mb
    }).array('inputFile'); // 'inputFile' es el nombre del campo del formulario html que sube los archivos
                           // Si solo se desea subir un archivo a la vez, usar single en vez de array.

export { multerMiddleware };