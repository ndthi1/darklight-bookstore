
import express from 'express';
import viewMdware from './middleware/views.mdware.js';
import routesMdware from './middleware/routes.mdware.js';
import localsMdware from './middleware/locals.mdware.js';
import sessionMdware from './middleware/session.mdware.js';
import flash from 'express-flash';
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
const app = express();

app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(express.json());
app.use('/assets', express.static('assets'));
app.use(flash());

sessionMdware(app);
localsMdware(app);
viewMdware(app);
routesMdware(app);

const port = process.env.PORT || 5000);
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
