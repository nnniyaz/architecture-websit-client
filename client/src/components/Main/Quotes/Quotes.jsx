import classes from './Quotes.module.css';
import background from '../../../assets/images/people.jpg';

const Quotes = () => {
    return (
        <div className={classes.page}>
            <div className={classes.intro} style={{ backgroundImage: `url(${background})` }}>
                <div className={classes.grandient}>
                    <div className={classes.title}>PEOPLE</div>
                    <div className={classes.topic}>
                        <div className={classes.topictext}>We are dedicated to providing our clients with the best that design has to offer.</div>
                        <div className={classes.author}>Frank Gehry</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes; 