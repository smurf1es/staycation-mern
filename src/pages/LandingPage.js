import Categories from 'components/Categories';
import Header from 'components/Header';
import Hero from 'components/Hero';
import MostPicked from 'components/MostPicked';

import data from 'json/landingPage';
import { createRef } from 'react';

export default function LandingPage(props) {
  const refMostPicked = createRef();
  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={data.hero} />
      <MostPicked refMostPicked={refMostPicked} data={data.mostPicked} />
      <Categories data={data.categories} />
    </>
  );
}
