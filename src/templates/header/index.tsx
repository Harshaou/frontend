import Link from 'next/link';
import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

const Index = () => {
  return (
    <div className=" w-full ">
      <div className="mx-auto flex w-10/12 items-center justify-between">
        <div className="text-3xl font-bold text-gray-900">
          {AppConfig.title}
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/test">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
