import React from 'react';

import Div from './Div';

interface Props {
  children: React.ReactNodeArray | React.ReactNode | undefined,
}

export default function Body(props: Props) {
  return (
    <Div width="100%" gap="50px">
      {props.children}
    </Div>
  );
}