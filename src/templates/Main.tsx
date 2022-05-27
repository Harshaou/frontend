import type { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <Header />

      <div className="content py-5 text-xl">{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
