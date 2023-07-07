import { sign, verify } from 'jsonwebtoken';

const { JWT_SECRET }: any = process.env;

const generateToken = (id: string) => {
	const jwt = sign({ id }, JWT_SECRET, {
		expiresIn: '1h'	
	});
	return jwt;
};

const verifytoken = (jwt: string) => {
	return verify(jwt, JWT_SECRET);
};

export { generateToken, verifytoken };