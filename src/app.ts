// Imports
    import 'dotenv/config';
    import express from 'express';
    import morgan from 'morgan';
    import cors from 'cors';
    import favicon from 'serve-favicon';
    import path from 'path';
    import apiRouter from './routes/api'; // A typescript no le gusta especificar la extensión de los archivos .ts

// Initializations
    export const app = express();

// Settings
    const { HOST, PORT } = process.env;
    app.set('HOST', HOST || '127.0.0.1');
    app.set('PORT', PORT || 3000);

// Middlewares
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());

// Routes
    app.use(apiRouter);

// Static files
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));