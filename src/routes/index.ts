import { Request, Response, Router } from 'express';
import { settingsRoutes } from './settings';

const routes = Router();

routes
	.get('', (request: Request, response: Response) => {
		response.status(200).json({
			status: 200,
			message: 'API its working! 🚀'
		});
	})
	.use('/settings', settingsRoutes);

export { routes };
