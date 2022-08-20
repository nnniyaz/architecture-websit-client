import classes from './Highlights.module.css';
import background from '../../../assets/images/heydar-aliyev.jpg';
import highlight from '../../../assets/images/highlight.jpg';
import halfHighlight from '../../../assets/images/half-highlight.jpg';
import View from '../../UI/View/View';
import MyButton from '../../UI/my-button/MyButton'
import { useDispatch } from 'react-redux'
import { setOpenPopup } from '../../../redux/slices/popup'

const Highlights = () => {
    const dispatch = useDispatch()

    return (
      <div className={classes.page}>
        <div
          className={classes.intro}
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className={classes.grandient}>
            <div className={classes.content}>
              <div className={classes.topic}>HEYDAR ALIYEV CULTURAL CENTER</div>
              <div className={classes.title}>PROJECT HIGLIGHT</div>
            </div>
          </div>
        </div>

        <div className={classes.article}>
          <div className={classes.block}>
            <div className={classes.year}>2022</div>
            <div className={classes.location}>Baku</div>
            <div className={classes.type}>Museum</div>
          </div>

          <div className={classes.block}>
            <div className={classes.articleTitle}>
              Architecture should speak of its time and place, but yearn for
              timelessness.
            </div>
            <div className={classes.articleText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium autem deleniti incidunt voluptatibus. Perspiciatis,
              dicta. Commodi alias odio sapiente maxime voluptatibus fugiat
              architecto quibusdam cumque est ipsa sit, ducimus vitae! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci
              similique nisi numquam? Perferendis veniam amet tempore
              reprehenderit quasi quas, esse repellat eligendi quos nihil
              tenetur minus, earum nulla harum.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda nam, non, itaque sequi suscipit dolores quo, mollitia
              voluptatum atque laborum quidem fuga a? Blanditiis, consequuntur
              possimus delectus aut nobis consequatur.
            </div>
            <MyButton
              onClick={() => dispatch(setOpenPopup(true))}
              theme="dark"
              style={{
                marginTop: "40px",
                background: "#000",
                color: "#fff",
              }}
            >
              Оставить заявку
            </MyButton>
          </div>

          <div className={classes.block}>
            <img className={classes.image} src={highlight} alt="highlights" />
          </div>

          <div
            className={classes.block}
            style={{ display: "flex", alignSelf: "flex-end" }}
          >
            <img
              className={classes.image}
              src={halfHighlight}
              alt="highlights"
              style={{
                height: "50%",
                alignSelf: "flex-end",
              }}
            />
          </div>

          <div className={classes.block}>
            <img
              className={classes.image}
              src={halfHighlight}
              alt="highlights"
              style={{
                height: "50%",
              }}
            />
          </div>

          <div className={classes.block}>
            <img className={classes.image} src={highlight} alt="highlights" />
          </div>
        </div>

        <View text="VIEW PROJECT" hasImg />
      </div>
    );
}

export default Highlights;