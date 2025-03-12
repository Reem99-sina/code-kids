import { FC } from 'react';

interface Props {
  color?: string;
}

export const Line: FC<Props> = ({ color }) => {
  return (
    <div
      className={'h-[1px] w-full bg-gray-200'}
      style={color ? { backgroundColor: color } : {}}
    />
  );
};

