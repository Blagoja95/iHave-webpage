import OtherProducts from "./OtherProducts";

const Other = () => {
  return (
    <section className="other">
      <div className="section other__inner">
        <div className="title-content other__content">
          <h1 className="title other__title">Povezani proizvodi</h1>
          <p className="paragraph other__paragraph">
            Large-size earmuffs that could cover the whole ears, paired with
            thick, soft earmuffscan make it comfortable to immerse in music for
            a long time.
          </p>
        </div>
        <OtherProducts />
      </div>
    </section>
  );
};

export default Other;
