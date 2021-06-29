import * as express from 'express';
import config from '../../lib/config';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).json({
		message: `For documentation visit https://${config().server.domain}/docs`
	});
});

export default router;
