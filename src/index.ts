import * as express from 'express';
import * as bodyParser from 'body-parser';

import user from './routes/user';
import api from './routes/api';
import config from './lib/config';

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use('/', user);
app.use('/api', api);

app.listen(config().server.port);
