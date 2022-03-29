import { NavLink } from 'react-router-dom';
import * as S from './styles';
import CustomButton from '../../components/CustomButton';
import CardItem from '../../components/CardItem';

const Home: React.FC = () => {
  return (
    <S.Container>
      <div className='main-title'>
        <p>
          <strong>My awesome menus</strong>
        </p>

        <NavLink to={'/create-menu-template'}>
          <CustomButton
            disabled={false}
            isLoading={false}
            width={160}
            variation='primary'
            text='Create new menu'
          />
        </NavLink>
      </div>

      <CardItem title='Menu title' />
    </S.Container>
  );
};

export default Home;
