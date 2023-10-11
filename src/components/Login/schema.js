import Joi from "joi";
import Validator from "../../infrastructure/Validator";

const loginSchema = Joi.object({
  email: Validator.email(),
  password: Validator.password(),
});

export default loginSchema;
