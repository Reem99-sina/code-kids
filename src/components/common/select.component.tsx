import clsx from 'clsx';
import React, { JSX } from 'react';
import ReactSelect, { PropsValue, SingleValue } from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface Props {
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: PropsValue<Option>;
  label?: string;
  styleCustom?: { [key: string]: string };
  icon?: JSX.Element;
  error?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
}

export const Select: React.FC<Props> = ({
  placeholder,
  options,
  onChange,
  defaultValue,
  label,
  styleCustom,
  icon,
  error,
  errorMessage,
  isDisabled = false,
}) => {
  const handleOnChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption?.value) {
      onChange(selectedOption.value);
    }
  };

  return (
    <>
      {label ? (
        <div className='flex w-full flex-row items-center justify-between'>
          <p
            className={clsx(
              'text-xs font-bold ',
              error ? 'text-red-600' : 'text-black',
            )}
          >
            {label}
          </p>
          {icon ? <span>{icon}</span> : null}
        </div>
      ) : null}

      {!label ? <></> : <div className='mt-2' />}

      <ReactSelect
        placeholder={placeholder ?? ''}
        options={options}
        isDisabled={isDisabled}
        onChange={handleOnChange}
        defaultValue={defaultValue}
        styles={{
          control: styles => ({
            ...styles,
            borderColor: error ? '#ff0000' : '#E2E2E2',
            borderRadius: '6px',
            width: '347px',
            height: '40px',
            color: 'black',
            boxShadow: 'none',
            '&:hover': {},
            ...styleCustom,
          }),
          placeholder: styles => ({
            ...styles,
            color: '#58595B',
            fontSize: '14px',
            fontWeight: 400,
            opacity: 0.5,
          }),
          dropdownIndicator: styles => ({
            ...styles,
            color: '#58595B',
            opacity: 0.5,
            '&:hover': {
              color: '#58595B',
              opacity: 0.5,
            },
          }),
          option: styles => ({
            ...styles,
            borderColor: '#E2E2E2',
            borderTopWidth: 1,
            color: 'black',
            fontSize: '14px',
          }),
        }}
        components={{ IndicatorSeparator: null }}
      />
      {errorMessage && (
        <p className='mb-4 text-xs text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </>
  );
};
