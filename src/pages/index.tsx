/* eslint-disable no-console */
// import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';

import { Meta } from '@/layouts/Meta';
import TextEditor from '@/omponenets/common/TextEditor';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Cool"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div>
        <TextEditor />
      </div>
    </Main>
  );
};

export default Index;
