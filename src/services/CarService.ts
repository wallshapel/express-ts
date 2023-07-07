import { ICar } from '../interfaces/ICar';
import Car from '../models/Car';

const IIndex = async () => {
	return await Car.find({});
};

const IShow = async (id: string) => {
	return await Car.findOne({ _id: id }); // En mongoDB los id se generan como _id
};

const IStore = async (car: ICar) => {
	return await Car.create(car);
};

const IUpdate = async (id: string, car: ICar) => {
	return await Car.findOneAndUpdate({ _id: id }, car, { new: true }); // new: true devuelve el carro ya actualizado, en false lo devuelve como estaba antes de actualizarlo.
};

const IDelete = async (id: string) => {
	await Car.findByIdAndDelete(id);
};

export { IIndex, IShow, IStore, IUpdate, IDelete };