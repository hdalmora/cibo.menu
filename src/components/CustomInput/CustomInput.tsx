import { useEffect, useState, useRef } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { useField } from '@unform/core';
import * as S from './styles';
import MaskedInputWithRef from './MaskedInputWithRef';

const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  integerLimit: 3,
  allowNegative: false,
  allowLeadingZeroes: false,
};

interface CustomInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'number' | 'email';
  value: string | number | null;
  onChangeValue?: (value: string | number) => void;
  main?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  placeholder,
  value,
  onChangeValue,
  main,
  type,
}: CustomInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [errorControl, setErrorControl] = useState(false);

  const { fieldName, registerField, error } = useField(name);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    if (currentValue) {
      if (onChangeValue) {
        onChangeValue(
          type === 'number'
            ? Number.parseFloat(currentValue.replace('R$ ', ''))
            : currentValue
        );
      }

      const isNotEmpty = currentValue.length > 0;

      if (isNotEmpty && errorControl) {
        setErrorControl(false);
      }
    }
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        if (type === 'number') {
          return Number.parseFloat(ref.current.value.replace('R$ ', ''));
        }

        return ref.current.value;
      },
      setValue: (ref, currentValue: any) => {
        ref.current.value = currentValue;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setErrorControl(!!error);
  }, [error]);

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <S.TextFieldContainer
      className='field-input'
      error={errorControl}
      main={main}
    >
      {type === 'number' ? (
        <MaskedInputWithRef
          id={fieldName}
          ref={inputRef}
          placeholder={placeholder}
          defaultValue={value || ''}
          mask={currencyMask}
          onChange={handleOnChangeInput}
        />
      ) : (
        <input
          id={fieldName}
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          defaultValue={value || ''}
          onChange={handleOnChangeInput}
        />
      )}
    </S.TextFieldContainer>
  );
};

export default CustomInput;
