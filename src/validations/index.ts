import menuTemplateSchema from './schemas/menu-template';
import loginEmailSchema from './schemas/login-email';

import validator from './validator';

export const validateMenuTemplate = async (data: any) => {
  await validator(menuTemplateSchema, data);
};

export const validateLoginEmail = async (data: any) => {
  await validator(loginEmailSchema, data);
};
