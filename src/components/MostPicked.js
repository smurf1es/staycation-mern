import Button from 'elements/Button';

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((dt, idx) => {
          return (
            <div
              key={`mostpicked-${idx}`}
              className={`item column-4${idx === 0 ? ' row-2' : ' row-1'}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${dt.price}{' '}
                  <span className="font-weight-light">per {dt.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img src={dt.imageUrl} alt={dt.name} className="img-cover" />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${dt._id}`}
                  >
                    <h5>{dt.name}</h5>
                  </Button>
                  <span>
                    {dt.city}, {dt.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
