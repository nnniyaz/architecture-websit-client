import s from './Office.module.scss'

const Office = () => {
    return (
      <div className={s.office}>
        <h2>OFFICE</h2>

        <div className={s.content}>
          <div className={s.map}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.8722140575103!2d76.94088851350638!3d43.228070738796326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f1f6e828809%3A0xf5841523424bc419!2z0L_RgNC-0YHQv9C10LrRgiBB0LvRjC3QpNCw0YDQsNCx0LggMjEsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1660883774940!5m2!1sru!2skz"
              width="100%"
              height="600"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
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
}

export default Office;