import _ from 'lodash';
import FontsContainer from '../../components/FontsContainer';
import Toolbar from '../../components/Toolbar';
import useFontStore from '../../stores/fontStore';
import { buildFiltersByQueryParams } from '../../utils/queryUtils';
import {useEffect} from "react"

const Home = () => {
  const {pending,setFilters} = useFontStore()

  useEffect(() => {
    const filters = buildFiltersByQueryParams()
    if(!_.isEmpty(filters)){
      pending()
      setFilters(filters)
    }
  }, [])

  return (
    <div className="">
      <Toolbar />
      <FontsContainer />
    </div>
  );
};

export default Home;
