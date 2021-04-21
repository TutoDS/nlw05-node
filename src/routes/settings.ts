import { SettingsController } from 'controllers/SettingsController';
import { Router } from 'express';

const controller = new SettingsController();

const settingsRoutes = Router();

settingsRoutes.post('/', controller.create);

export { settingsRoutes };
