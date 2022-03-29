import { useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
import * as S from './styles';

interface CustomInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'number';
  value: string | number | null;
  onChangeValue: (value: string | number) => void;
  main?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  placeholder,
  value,
  onChangeValue,
  main,
}: CustomInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [errorControl, setErrorControl] = useState(false);

  const { fieldName, registerField, error } = useField(name);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    if (currentValue) {
      onChangeValue(currentValue);

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
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setErrorControl(!!error);
  }, [error]);

  return (
    <S.TextFieldContainer
      className='field-input'
      error={errorControl}
      main={main}
    >
      <input
        id={fieldName}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={value || ''}
        onChange={handleOnChangeInput}
      />
    </S.TextFieldContainer>
  );
};

export default CustomInput;
