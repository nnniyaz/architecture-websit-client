import classes from './Quotes.module.css';
import background from '../../../assets/images/people.jpg';

const Quotes = () => {
    return (
        <div className={classes.page}>
            <div className={classes.intro} style={{ backgroundImage: `url(${background})` }}>
                <div className={classes.content}>
                    <div className={classes.title}>People</div>
                    <div className={classes.topic}>
                        HEYDAR ALIYEV CULTURAL CENTER
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes; 