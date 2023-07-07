import { Response, Request, NextFunction } from 'express';

const logMiddleware = (_req: Request, res: Response, next: NextFunction) => {
	const header = _req.headers;
	const userAgent = header['user-agent']; // Obtiene el nombre del cliente. Puede ser postman, un navegador etc..
	console.log('user-agent: ' + userAgent);
	next();
};

export { logMiddleware };