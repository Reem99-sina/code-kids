import clsx from 'clsx';
import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
  inputProps?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > & {
    placeholder?: string;
    ref?: React.Ref<HTMLTextAreaElement>;
  };
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  errorMessage,
  disabled,
  inputProps = {},
}) => {
  return (
    <div className='h-full  w-full'>
      {label && (
        <label
          className={clsx(
            'mb-2 block text-xs font-bold text-black',
            errorMessage && 'dark:text-error-dark text-error',
          )}
        >
          {label}
        </label>
      )}

      <textarea
        {...inputProps}
        className={clsx(
          `block  min-w-full  p-2.5 text-sm  text-black`,
          `border ${
            errorMessage ? 'border-error' : 'border-[#E2E2E2]'
          } rounded-md `,
          ' placeholder:text-xs placeholder:font-normal',
          disabled ? 'bg-bg3' : 'bg-white',
          inputProps.className,
        )}
      />

      {errorMessage && (
        <p className='my-1 text-xs text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
