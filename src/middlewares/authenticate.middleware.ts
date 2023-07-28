import AppDataSource from 'configs/typeorm.config';
import ENV from 'constants/environment';
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { User } from 'modules/user/user.entity';

const authenticate: RequestHandler = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
	
		if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
		const token = authHeader.split(' ')[1];

		// TODO:-D define type
		const decoded: any = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET);
		const id = decoded?.id

		if (!id) return res.sendStatus(403);

		console.log('decoded', decoded);
		const repo = AppDataSource.getRepository(User);
		const user = await repo.findOneByOrFail({ id });

		// TODO:-D define RequestUser type
		// @ts-ignore
		req.user = user;
		next();
	} catch (error) {
		return res.sendStatus(403);
	}
};

export default authenticate;
