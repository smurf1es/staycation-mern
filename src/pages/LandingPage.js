import Categories from 'components/Categories';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import MostPicked from 'components/MostPicked';
import Testimony from 'components/Testimony';

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
      <Testimony data={data.testimonial} />
      <Footer />
    </>
  );
}
