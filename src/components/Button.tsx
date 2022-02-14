import React from 'react';

interface Props {
  name: string,
  onClick: () => void,
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
