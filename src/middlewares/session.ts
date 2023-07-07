import { Request, Response, NextFunction } from 'express';
import { verifytoken } from '../utils/jwt';

const sessionMiddleware = (_req: Request, res: Response, next: NextFunction) => {
	try {
		const jwtHeader = _req.headers.authorization || '';
		const jwt = jwtHeader.split(' ').pop(); // pop() devuelve el último elemento de un array y lo devuelve.
		if (verifytoken(`${jwt}`)) // Se usan las `${}` en este caso, para indicarle a typescript que aunque crea que jwt puede ser undefined en vez de string, en realidad es string
			next();
	} catch (e: any) {
		if (e.message === 'jwt expired')
			res.status(500).json({ error: 'jwt expired' });
		else if (e.message === 'invalid signature')
			res.status(500).json({ error: 'jwt malformed' });
		else
			res.status(401).json({ error: 'jwt not found' });
	}
};

export { sessionMiddleware };