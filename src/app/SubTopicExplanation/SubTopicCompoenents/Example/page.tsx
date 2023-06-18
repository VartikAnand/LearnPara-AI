import React from 'react';

interface ExampleProps {
  Data: string;
}

const Example: React.FC<ExampleProps> = ({ Data }) => {
  return <div>Example</div>;
};

export default Example;
