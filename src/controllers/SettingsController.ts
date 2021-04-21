import { Request, Response } from 'express';
import { SettingsRepository } from 'repositories/SettingsRepository';
import { getCustomRepository } from 'typeorm';

class SettingsController {
	async create(request: Request, response: Response) {
		const { chat, username } = request.body;
		const repository = getCustomRepository(SettingsRepository);

		const settings = repository.create({
			chat,
			username
		});

		await repository.save(settings);

		return response.status(201).json({
			code: 201,
			message: 'Settings created with success!',
			settings
		});
	}
}

export { SettingsController };
