import { serverEnv } from 'configs/environment';
import express from 'express';
import { routes } from 'routes';

const app = express();

app
	// API Routes
	.use('/api', routes)

	//  Set Port
	.listen(serverEnv.port, () => {
		console.log(`[SERVER START] - PORT ${serverEnv.port} ⚡️`);
	});
