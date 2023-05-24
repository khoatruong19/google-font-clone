import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';
import googleFontService from './services/googleFontsService';
import { useEffect } from 'react';
import useFontStore from './stores/fontStore';
import _ from 'lodash';
import PageLoading from './components/core/PageLoading';
// import { addFont } from './utils/fontUtils';

function App() {
  const { loading, pending, setFonts } = useFontStore();

  useEffect(() => {
    const getAllFonts = async () => {
      pending();
      try {
        const res = await googleFontService.getAllFonts();
        let fonts = res.data.items;
        fonts = _.take(fonts, 50)

        setFonts(
          _.map(fonts, ({ family, variants, subsets, category, files }) => ({
            family,
            variants,
            subsets,
            category,
            fontUrl: _.get(files, 'regular'),
          }))
        );
      } catch (error) {
        setFonts([]);
      }
    };
    getAllFonts();
  }, []);

  if (loading) return <PageLoading/>;

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
