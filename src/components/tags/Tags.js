import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section className="max-w-7xl mx-auto flex justify-between border-b">
      <div className="  px-5 py-6 lg:px-0 flex gap-2  overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
      <div className="px-5 py-6 lg:px-0 flex gap-2 overflow-y-auto">
        <div className="bg-gray-100 text-black px-4 py-1 rounded-full cursor-pointer" onClick={()=>dispatch(resetFilter())}>
          Reset
        </div>
      </div>
    </section>
  ) : null;
}
