import dotenv from 'dotenv';
import { IServerEnv } from '../interfaces/IEnvironment';
dotenv.config();

const { PORT } = process.env;

export const serverEnv: IServerEnv = {
	port: Number(PORT)
};
