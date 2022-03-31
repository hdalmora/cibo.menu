import { MenuSection, MenuTemplate } from '../../models/menu-template';
import * as S from './styles';

interface MenuProps {
  menu?: MenuTemplate;
}

const Menu: React.FC<MenuProps> = ({ menu }: MenuProps) => {
  return (
    <S.Container>
      <p className='title'>
        {menu?.name || 'Oops, there is no menu to see here :/'}
      </p>
      <p className='sub-title'>{menu?.description}</p>

      <S.MenuContent>
        {menu &&
          menu.sections.map((section: MenuSection) => (
            <div key={section.id}>
              <S.MenuSection>
                {section.menuSectionName} <hr className='solid' />
              </S.MenuSection>
              <S.MenuSectionContent>
                {section.items.map((item, index) => (
                  <div key={item.id} className='item-container'>
                    <div className='item-number'>{index + 1}</div>
                    <div className='item-content'>
                      <span className='food'>{item.foodName}</span>
                      <span className='price'>
                        R$ {item.foodPrice?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </S.MenuSectionContent>
            </div>
          ))}
      </S.MenuContent>
    </S.Container>
  );
};

export default Menu;
