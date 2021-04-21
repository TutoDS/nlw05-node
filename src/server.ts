import { serverEnv } from 'configs/environment';
import 'database';
import express from 'express';
import 'reflect-metadata';
import { routes } from 'routes';

const app = express();

app
	// Use JSON
	.use(express.json())

	// API Routes
	.use('/api', routes)

	//  Set Port
	.listen(serverEnv.port, () => {
		console.log(`[SERVER START] - PORT ${serverEnv.port} ⚡️`);
	});
