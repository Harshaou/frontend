import { Group } from '@mantine/core';
import { useState } from 'react';

import RichTextEditor from './Editor';

const initialValue = '';

const TextEditor = () => {
  const [value, onChange] = useState(initialValue);
  return (
    <div>
      <Group position="center" direction="column">
        <RichTextEditor
          placeholder="Publish your article"
          value={value}
          onChange={onChange}
        />
      </Group>
    </div>
  );
};

export default TextEditor;
