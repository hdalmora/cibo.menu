import menuTemplateSchema from './schemas/menu-template';

import validator from './validator';

export const validateMenuTemplate = async (data: any) => {
  await validator(menuTemplateSchema, data);
};
