import dotenv from 'dotenv';

dotenv.config();

export const WEBPACK_HOST = 'localhost'
export const WEBPACK_DEVELOPMENT_PORT = process.env.WEBPACK_DEVELOPMENT_PORT 
export const WEBPACK_DEVELOPEMENT_URL= `http://${WEBPACK_HOST}:${WEBPACK_DEVELOPMENT_PORT}/`