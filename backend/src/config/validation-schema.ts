import * as Joi from 'joi';

export const validationSchema = Joi.object({
    MONGO_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    ADMIN_EMAIL: Joi.string().email().required(),
    ADMIN_PASSWORD: Joi.string().min(8).required(),
    ADMIN_NAME: Joi.string().required(),
});