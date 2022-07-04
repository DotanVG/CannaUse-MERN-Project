import './loader.styles.css';
import leafLoader from '../../../images/leaf-loader.png';

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={leafLoader} className="loader" alt="LOADING..."></img>
        </div>
    );
};

export default Loader;
