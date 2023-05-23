import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';
import googleFontService from './services/googleFontsService';
import { useEffect } from 'react';
import useFontStore from './stores/fontStore';
import _ from 'lodash';
// import { addFont } from './utils/fontUtils';

function App() {
  const { loading, pending, setFonts } = useFontStore();

  useEffect(() => {
    const getAllFonts = async () => {
      pending();
      try {
        const res = await googleFontService.getAllFonts();
        const fonts = res.data.items;
        // _.forEach(fonts, (font) => {
        //   const newStyle = document.createElement('style');
        //   newStyle.appendChild(document.createTextNode('@font-face{font-family: '+font.family+'; src: url('+font.files.regular+');}'));
        //   document.head.appendChild(newStyle);
        // });
        setFonts(fonts);
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
