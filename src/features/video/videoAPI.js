import axios from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};

export const updatedReaction = async (id, likes, unlikes) => {
  const { data } = await axios.get(`/videos/${id}`);

  const response = await axios.patch(`/videos/${id}/`, { likes, unlikes });
  return response.data;
};
