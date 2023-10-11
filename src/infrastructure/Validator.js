import Joi from "joi";

const Validator = (function () {
  const email = () =>
    Joi.string()
      .email({ tlds: { allow: false } })
      .message("Invalid email");

  const password = () =>
    Joi.string()
      .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$"))
      .message("Invalid Password");

  return { email, password };
})();

export default Validator;
