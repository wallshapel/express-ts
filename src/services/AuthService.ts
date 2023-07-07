import { IUser } from '../interfaces/IUser';
import User from '../models/User';
import { encrypt, verify } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';

const IRegister = async (user: IUser) => {
	const { email, password } = user;
	const checkUser = await User.findOne({ email }); // Verificamos si el usuario ya existe en la db.
	if (checkUser === null) {		
		user.password = await encrypt(password);
		return await User.create(user); 
	}	
	return false;
};

const ILogin = async (email: string, pass: string) => {
	const user = await User.findOne({ email }); // Verificamos si el usuario existe en la db.	
	if (!user) return false;
	const hash = user.password; // Obtenemos el password hasheado de la base de datos.
	const isCorrect = await verify(pass, hash);
	if (isCorrect) return generateToken(user.id);
	return false;
};

export { IRegister, ILogin };