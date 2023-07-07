import 'dotenv/config';
import { connect } from 'mongoose';

const { HOST, MONGODB_PORT, MONGODB_DB } = process.env;

const dbConnect = async (): Promise<void> => {
	const DB_URI: string = 'mongodb://' + HOST + ':' + MONGODB_PORT + '/' + MONGODB_DB ;
	await connect(DB_URI);	
};

export default dbConnect;