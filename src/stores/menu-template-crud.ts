import create from 'zustand';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import {
  MenuTemplate,
  MenuItem,
  MenuItemWithId,
} from '../models/menu-template';

interface MenuTemplateState {
  menu: MenuTemplate;
  addMenuSection: () => void;
  addMenuItem: (sectionIndex: number, menuItem: MenuItem) => void;
  removeMenuItem: (sectionIndex: number, id: string) => void;
  removeSection: (sectionIndex: number) => void;
  updateSectionTitle: (sectionIndex: number, title: string) => void;
  updateTitle: (sectionIndex: number, id: string, title: string) => void;
  updatePrice: (sectionIndex: number, id: string, price: number) => void;
  updateMenuName: (menuName: string) => void;
  updateMenuDescription: (menuDescription: string) => void;
}

export const useStore = create<MenuTemplateState>((set) => ({
  menu: { id: '', name: '', description: '', sections: [] },
  addMenuSection: () =>
    set(
      produce((state) => {
        state.menu.sections.push({
          id: uuidv4(),
          menuSectionName: '',
          items: [],
        });
      })
    ),
  addMenuItem: (sectionIndex: number, menuItem: MenuItem) =>
    set(
      produce((state) => {
        state.menu.sections[sectionIndex].items.push({
          ...menuItem,
          id: uuidv4(),
        });
      })
    ),
  removeMenuItem: (sectionIndex: number, id: string) =>
    set(
      produce((state) => {
        const menuItemIndex = state.menu.sections[sectionIndex].items.findIndex(
          (el: MenuItemWithId) => el.id === id
        );
        state.menu.sections[sectionIndex].items.splice(menuItemIndex, 1);
      })
    ),
  removeSection: (sectionIndex: number) =>
    set(
      produce((state) => {
        state.menu.sections.splice(sectionIndex, 1);
      })
    ),
  updateSectionTitle: (sectionIndex: number, title: string) =>
    set(
      produce((state) => {
        state.menu.sections[sectionIndex].menuSectionName = title;
      })
    ),
  updateTitle: (sectionIndex: number, id: string, foodName: string) =>
    set(
      produce((state) => {
        const menuItem = state.menu.sections[sectionIndex].items.find(
          (el: MenuItemWithId) => el.id === id
        );
        menuItem.foodName = foodName;
      })
    ),
  updatePrice: (sectionIndex: number, id: string, foodPrice: number) =>
    set(
      produce((state) => {
        const menuItem = state.menu.sections[sectionIndex].items.find(
          (el: MenuItemWithId) => el.id === id
        );
        menuItem.foodPrice = foodPrice;
      })
    ),
  updateMenuName: (menuName: string) =>
    set(
      produce((state) => {
        state.menu.name = menuName;
      })
    ),
  updateMenuDescription: (menuDescription: string) =>
    set(
      produce((state) => {
        state.menu.description = menuDescription;
      })
    ),
}));
