import { Schema, Types, model, Model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UserSchema = new Schema <IUser> (
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: 'I\'m the description'
		}			
	},
	{
		timestamps: true,
		versionKey: false
	}
);

const User = model('users', UserSchema); // 'users' es el nombre de la colección en la base de datos

export default User;