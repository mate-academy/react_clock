type Props = {
  url: string,
};

const Font: React.FC<Props> = ({ url }) => (
  <style>
    {
      `@import url(${url});`
    }
  </style>
);

export default Font;
