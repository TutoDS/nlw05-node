import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('', (request: Request, response: Response) => {
	response.status(200).json({
		status: 200,
		message: 'API its working! 🚀'
	});
});

export { routes };
