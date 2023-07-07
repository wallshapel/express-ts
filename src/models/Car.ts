import { Schema, Types, model, Model } from 'mongoose';
import { ICar } from '../interfaces/ICar';

const CarSchema = new Schema <ICar> (
	{
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		},
		gas: {
			type: String,
			enum: ['gasoline', 'electric'],
			required: true
		},
		year: {
			type: Number,
			required: true	
		},
		description: {
			type: String
		},
		price: {
			type: Number,
			required: true
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

const Car = model('cars', CarSchema); // 'cars' es el nombre de la colección en la base de datos

export default Car;