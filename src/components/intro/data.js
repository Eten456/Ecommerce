import homepageImage from '../../files/homepage-image.jpg';
import slide2img from '../../files/slide-2.jpg';
import slide3img from '../../files/slide-3.jpg';
import './intro.scss';

export const Slide1 = () => {
    return (
    <div className="intro slide1">
        <div className="image-section">
            <img src={homepageImage} alt="homepage design" className="homepage-image" />
        </div>
        <div className="text-section">
            <h2>Summer Sale</h2>
            <p>Don't compromise on style! Shop 30% off a selected range</p>
            <button>Shop Now</button>
        </div>
    </div>
    )
}

export const Slide2 = () => {
    return (
    <div className="intro slide2">
        <div className="image-section">
            <img src={slide2img} alt="homepage design" className="homepage-image" />
        </div>
        <div className="text-section">
            <h2>View The Latest Collection</h2>
            <p>Introducing SS21</p>
            <button>Shop Now
                {/* {ArrowRightAltIcon} */}
                </button>
        </div>
    </div>
    )
}

export const Slide3 = () => {
    return (
    <div className="intro slide3">
        <div className="image-section">
            <img src={slide3img} alt="homepage design" className="homepage-image" />
        </div>
        <div className="text-section">
            <h2>View the latest trends</h2>
            <p>Shop our best sellers</p>
            <button>Shop Now
                {/* {ArrowRightAltIcon} */}
                </button>
        </div>
    </div>
    )
};