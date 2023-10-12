import * as React from 'react';
import { useButton } from '@mui/base/useButton';

export default function BasicButton() {
  const { getRootProps } = useButton();
  return (
    <button type="button" {...getRootProps()}>
      Click Me
    </button>
  );
}