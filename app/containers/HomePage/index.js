/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Demo from 'components/Demo';
import DemoWithoutRedux from 'components/DemoWithoutRedux/DemoWithoutRedux';
import DemoWithRedux from 'components/DemoWithRedux/DemoWithRedux';
import Case1 from 'components/Case1/Case1';
import Case2 from 'components/Case2/Case2';

export default function HomePage() {
  return <Case2 />;
}
