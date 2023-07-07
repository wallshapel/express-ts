import { Request, Response } from 'express';
import { IIndex, IShow, IStore, IUpdate, IDelete } from '../services/CarService';
import { handleHttp } from '../utils/error';

const carIndex = async (_req: Request, res: Response) => {
	try {
		const response = await IIndex(); 
		res.send(response);	
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

const carShow = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await IShow(id); 
		res.send(response);
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

const carStore = async ({ body }: Request, res: Response) => {
	try {
		const response = await IStore(body); 
		res.status(201).send(response);
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

const carUpdate = async ({ params, body }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await IUpdate(id, body); 
		res.send(response);
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

const carDestroy = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		await IDelete(id);
		res.sendStatus(204);
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

export { carIndex, carShow, carStore, carUpdate, carDestroy };