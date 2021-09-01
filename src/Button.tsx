import React from 'react';

type Props = {
  name: string;
  action: () => void;
};

export const Button: React.FC<Props> = (props) => {
  const { name, action } = props;

  return (
    <button
      className="btn btn-outline-secondary"
      type="button"
      onClick={action}
    >
      {name}
    </button>
  );
};
