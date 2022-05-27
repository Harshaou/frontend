import { Group } from '@mantine/core';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import RichTextEditor from '../Componenets/Editor';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

const About = () => {
  const [value, onChange] = useState(initialValue);
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <Group position="center" direction="column">
        <RichTextEditor value={value} onChange={onChange} />
      </Group>
    </Main>
  );
};

export default About;
