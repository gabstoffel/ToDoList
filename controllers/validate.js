import joi from '@hapi/joi';

const validate = {
    registerValidate: (data) => {
        const schema = joi.object({
            name: joi.string().required().min(3).max(50),
            email: joi.string().required(),
            password: joi.string().min(8).max(100)
        })
        return schema.validate(data);
    },
    taskValidate: (data) => {
        const schema = joi.object({
            title: joi.string().required().min(3).max(50),
            description: joi.string().required().min(3).max(500)
        })
        return schema.validate(data);
    }
}

export default validate;