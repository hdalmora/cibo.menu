import { object, string, ObjectSchema } from 'yup';

const schema: ObjectSchema<any> = object().shape({
  email: string().email().required(),
});

export default schema;
