import axios from "axios";
import { BASE_API_URL } from "./constants";

const googleFontService = {
    getAllFonts: () => axios.get(BASE_API_URL+"&sort=trending"),
    getFontDetail: (fontFamily: string) => axios.get(BASE_API_URL+ `&family=${fontFamily}`),
    getFontBySorting: (sort: string) => axios.get(BASE_API_URL+ `&sort=${sort}`),
}

export default googleFontService