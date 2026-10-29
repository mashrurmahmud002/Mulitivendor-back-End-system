

import dotenv from 'dotenv';

import crypto from 'crypto';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createToken = (payload)=>{

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    return token;

}

