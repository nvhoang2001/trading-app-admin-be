import ENVS from 'constants/environment';
import app from './app';
import AppDataSource from 'configs/typeorm.config';

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
	})
	.catch((err) => {
		console.error('Error during Data Source initialization', err);
	});

app.listen(ENVS.PORT, () => {
	console.log(`Listening to port ${ENVS.PORT}`);
});
