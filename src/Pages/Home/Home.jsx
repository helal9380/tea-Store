
import Category from '../../Components/Category/Category';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Gallery from '../../Components/Gallery/Gallery';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <CategoryCard></CategoryCard>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;