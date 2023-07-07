import { Request, Response } from 'express';
import { IIndex } from '../services/UploadService';
import { handleHttp } from '../utils/error';

const uploadIndex = (_req: Request, res: Response) => {
	try {
		const response = IIndex(); 
		res.send(response);	
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

export { uploadIndex };