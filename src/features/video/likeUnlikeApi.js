import axios from "../../utils/axios";
import { LIKES } from "../../utils/const";

export const putLikeUnlike = async (type, id, count) => {
    const queryBody = type === LIKES ? { likes: count } : { unlikes: count }
    const response = await axios.patch(`/videos/${id}`, queryBody,
        { headers: { "Content-type": "application/json; charset=UTF-8" }, }
    );
    return response.data;
};
