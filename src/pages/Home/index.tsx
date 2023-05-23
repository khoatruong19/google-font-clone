import FontsContainer from '../../components/FontsContainer';
import Toolbar from '../../components/Toolbar';
import useFontStore from '../../stores/fontStore';

const Home = () => {
  const fonts = useFontStore(state => state.fonts)
  console.log({fonts})
  return (
    <div className="">
      <Toolbar />
      <FontsContainer />
    </div>
  );
};

export default Home;
