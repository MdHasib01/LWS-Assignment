import { ALLBLOGS, AUTHOR, CATEGORY, QUERY } from "./actionTypes";

export const allBlogs = () => {
  return {
    type: ALLBLOGS,
  };
};

export const sameCategory = (category) => {
  return {
    type: CATEGORY,
    payload: category,
  };
};

export const sameAuthor = (author) => {
  return {
    type: AUTHOR,
    payload: author,
  };
};

export const searchQuery = (query) => {
  return {
    type: QUERY,
    payload: query,
  };
};
