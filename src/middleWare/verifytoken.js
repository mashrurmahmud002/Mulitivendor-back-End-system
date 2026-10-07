

import dotenv from 'dotenv';

import crypto from 'crypto';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createToken = (payload)=>{

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    const addCryptotoken = crypto.createHash('sha256').update(token).digest('hex').slice(0, 5) + '' + new Date();
    return addCryptotoken;

}

