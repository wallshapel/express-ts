import { Request, Response } from 'express';
import { IRegister, ILogin } from '../services/AuthService';
import { handleHttp } from '../utils/error';

const register = async ({ body }: Request, res: Response) => {
	try {
		const response = await IRegister(body);
		if (!response)
			return res.status(500).json({ error: 'Email is already in use' }) 
		res.sendStatus(201);
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

const login = async ({ body }: Request, res: Response) => {
	try {
		const { email, password } = body;
		const response = await ILogin(email, password);
		if (!response)
			return res.status(401).json({ error: 'Invalid credentials' });
		res.status(201).json({ token: response });
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

export { register, login };