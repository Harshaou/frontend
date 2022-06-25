import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import HeaderMenu from './header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      {props.meta}
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        header={
          <Header height={70} p="md">
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              {/* <h1>Header</h1> */}
              <HeaderMenu />
            </div>
          </Header>
        }
      >
        <div className="w-full px-1 text-gray-700 antialiased">
          <div className="mx-auto max-w-screen-lg">
            <div className="content py-5 text-xl">{props.children}</div>
          </div>
        </div>
      </AppShell>
    </>
  );
};

export { Main };
