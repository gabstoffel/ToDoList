import joi from '@hapi/joi';
const registerValidate = (data) => {
    const schema = joi.object({
        nome: joi.string().required().min(3).max(50),
        email: joi.string().required(),
        password: joi.string().min(8).max(100)
    })
    return schema.validate(data);
}
export default registerValidate;