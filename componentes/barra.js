import * as React from 'react';
import { ToggleButton } from 'react-native-paper';

const Barra = () => {
  const [value, setValue] = React.useState('left');

  return (
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
      <ToggleButton icon="filter" value="left" />
      <ToggleButton icon="magnify" value="right" />
      <ToggleButton icon="order-bool-ascending" value="center" />
    </ToggleButton.Row>
  );
};

export default Barra;