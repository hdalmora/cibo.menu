export type MenuItem = {
  foodName: string | null;
  foodPrice: number | null;
};

export type MenuItemWithId = {
  id: string;
} & MenuItem;

export type MenuSection = {
  id: string;
  menuSectionName: string;
  items: MenuItemWithId[];
};

export type MenuTemplate = {
  id: string;
  name: string;
  description: string;
  sections: MenuSection[];
};
