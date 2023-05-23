import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';
import googleFontService from './services/googleFontsService';
import { useEffect } from 'react';
import useFontStore from './stores/fontStore';
import _ from 'lodash';
import { addFont } from './utils/fontUtils';

function App() {
  const { loading, pending, setFonts } = useFontStore();

  useEffect(() => {
    const getAllFonts = async () => {
      pending();
      try {
        const res = await googleFontService.getAllFonts();
        const fonts = res.data.items;
        setFonts(
          _.map(fonts, (font) => ({
            family: font.family,
            variants: font.variants,
            category: font.category,
            regularFontUrl: _.get(font, "files.regular"),
          }))
        );
        _.forEach(fonts, font => {addFont(font.family, _.get(font, "files.regular"))})
      } catch (error) {
        setFonts([]);
      }
    };
    getAllFonts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
