import { useDispatch, useSelector } from "react-redux";
import { paginateAction } from "../../features/filter/filterSlice";
import { RESULT_PER_PAGE } from "../../utils/const";

export default function Pagination() {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(state => state.filter)
    const { totalResult } = useSelector(state => state.videos)
    
    // const totalResult = 1

    // Pagination Handling
    const handlePaginate = (page) => {
        dispatch(paginateAction(page))
    }


    // How many pages
    let pages = 0;
    let pageArray = []
    if (totalResult > RESULT_PER_PAGE) {
        const division = totalResult / RESULT_PER_PAGE;
        // Final Page Count
        pages = totalResult % RESULT_PER_PAGE > 0 ? division + 1 : division;
        // Making Array
        pageArray = pages > 0 ? Array.from({ length: pages }, (_, i) => i + 1) : []
    }

    // Pagination Component Create
    const paginateComponent = pageArray.length > 0 ?
        pageArray.map(page => <div className={`${currentPage === page ? 'bg-blue-600' : 'bg-blue-300'} text-white px-4 py-1 rounded-full cursor-pointer`} onClick={() => handlePaginate(page)}>{page}</div>)
        : null;
        let video = "video";
        if(totalResult>1) video = "videos";
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                <div className='bg-teal-300  px-4 py-1 rounded-full text-black-500' >({totalResult}) {video}</div>
                {paginateComponent}
            </div>
        </section>
    );
}
