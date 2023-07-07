import { app } from './app'; // A typescript no le gusta especificar la extensión de los archivos .ts
import db from './config/mongo';

db().then(() => console.log('Connection successfully'));

app.listen(app.get('PORT'), () => console.log('Server on http://' + app.get('HOST') + ':' + app.get('PORT')));