import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { LIKES, UNLIKES } from "../../utils/const";
import {
  fetchUpdateReactions,
  likeAdd,
  unlikeAdd,
} from "../../features/reactions/reactionsSlice";
import { fetchVideo, likeUnlikeAsync } from "../../features/video/videoSlice";

export default function LikeUnlike({ props }) {
  // const { id } = props;
  const dispatch = useDispatch();
  const { id, likes, unlikes } = useSelector(state => state.video.video);

  // Handle Like Unlike
  const handleLikeUnlike = (type, id, count) => {
      dispatch(likeUnlikeAsync({ type, id, count }));
  }
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div
          className="shrink-0"
          onClick={() => handleLikeUnlike(LIKES, id, likes + 1)}
        >
          <img className="w-5 block" src={likeImage} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={unlikeImage}
            alt="Unlike"
            onClick={() => handleLikeUnlike(UNLIKES, id, unlikes + 1)}
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
}
