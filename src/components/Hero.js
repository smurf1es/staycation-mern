import HeroImage from 'assets/images/img-hero.jpg';
import HeroImageFrame from 'assets/images/img-hero-frame.jpg';

import CityIcon from 'assets/images/icons/ic_cities.svg';
import TravelerIcon from 'assets/images/icons/ic_traveler.svg';
import TreasureIcon from 'assets/images/icons/ic_treasure.svg';

import Button from 'elements/Button';
import numberFormat from 'utilities/numberFormat';

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  };

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: '170%' }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            onClick={showMostPicked}
            hasShadow
            isPrimary
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={TravelerIcon}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}{' '}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={TreasureIcon}
                alt={`${props.data} Treasures`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}{' '}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={CityIcon}
                alt={`${props.data} Cities`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}{' '}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={HeroImage}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={HeroImageFrame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: '0 -15px -15px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
