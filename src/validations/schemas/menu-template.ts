import { object, number, string, array, ObjectSchema } from 'yup';

const schema: ObjectSchema<any> = object().shape({
  name: string().required(),
  description: string().optional(),
  sections: array()
    .min(1)
    .of(
      object().shape({
        menuSectionName: string().required(),
        items: array()
          .min(1)
          .of(
            object().shape({
              foodName: string().required(),
              foodPrice: number().required(),
            })
          )
          .required(),
      })
    )
    .required(),
});

export default schema;
