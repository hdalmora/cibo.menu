import { ValidationError } from 'yup';

const validator = async (schema: any, data: any) => {
  try {
    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof ValidationError) {
      throw err;
    }
  }
};

export default validator;
