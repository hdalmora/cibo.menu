import * as S from './styles';
import CircularLoading from '../CircularLoading';

interface CustomButtonProps {
  disabled: boolean;
  isLoading: boolean;
  width?: number;
  variation: string;
  text: string;
  handleButtonClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled,
  isLoading,
  width,
  variation,
  text,
  handleButtonClick,
}: CustomButtonProps) => {
  return (
    <S.ButtonContainer type='submit' disabled={disabled}>
      <S.InnerButtonContainer
        className='btn'
        onClick={() => {
          if (isLoading || disabled || !handleButtonClick) return;

          handleButtonClick();
        }}
        isLoading={isLoading}
        disabled={disabled}
        variation={variation}
        width={width}
        // onKeyPress={enterPressed}
      >
        {isLoading && variation === 'primary' ? (
          <div className='loading'>
            <CircularLoading />
            <p className='btn_text_loading'>Loading...</p>
          </div>
        ) : (
          <div className='btn_root'>
            <p className='btn_text'>{text}</p>
          </div>
        )}
      </S.InnerButtonContainer>
    </S.ButtonContainer>
  );
};

export default CustomButton;
