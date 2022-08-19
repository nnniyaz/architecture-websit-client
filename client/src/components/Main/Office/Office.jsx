import s from "./Office.module.scss";

const Office = () => {
  return (
    <div className={s.office}>
      <h2>OFFICE</h2>
      <div className={s.content}>
        <div className={s.map}>
          <iframe
            title='location-map'
            src="https://yandex.com/map-widget/v1/?um=constructor%3A0d6370abb03c30ea17dc93dc1817d01897e8b3db35470680b76f0386e9e65698&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>

        <div className={s.info}>
          <h3>Gaudi Studio</h3>
          <p>Lorem, ipsum dolor.</p>
          <p>1004 lorem</p>
          <p>lorem/ipsum</p>

          <div className={s.contact}>
            <span>+41 21 624 44 44</span>
            <span>test.site@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
