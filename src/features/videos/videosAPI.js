import axios from "../../utils/axios";
import { RESULT_PER_PAGE } from "../../utils/const";

export const getVideos = async (tags, search, author, currentPage) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  if (author) {
    queryString += `&author_like=${author}`;
  }

  const page = `&_page=${currentPage}&_limit=${RESULT_PER_PAGE}`

    const response = await axios.get(`/videos/?${queryString}${page}`);
  // const response = await axios.get(`/videos/?${queryString}`);
  const totalResponse = response.headers["x-total-count"]
  return {videos: response.data, totalResult: parseInt(totalResponse)};
};
