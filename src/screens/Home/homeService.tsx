import API from "../../services/API";

const HomeService = {
   getRatedAnimes: async () => {
    try {
      const response = await API.get('/anime');
      console.warn(response);
    } catch (error) {
      console.log(error);
    };
  }
};

export default HomeService;