import axios from "axios";
import { BASE_API_URL } from "./constants";

const googleFontService = {
    getAllFonts: () => axios.get(BASE_API_URL),
}

export default googleFontService