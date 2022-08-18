import Slider from './Slider/Slider';
import Projects from './Projects/Projects';
import Highlights from './Highlights/Highlights';
import Quotes from './Quotes/Quotes';
import Team from './Team/Team';
import Office from './Office/Office';

import classes from './Main.module.css';

const Main = () => {
    return (
        <div className={classes.main}>
            <Slider />
            <Projects />
            <Highlights />
            <Quotes />
            <Team />
            <Office />
        </div>
    )
}
export default Main;