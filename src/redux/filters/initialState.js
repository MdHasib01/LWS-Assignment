import blogsData from "./blogsData";

const initialState={
        blogs:blogsData,
        filters:{
                category:'all',
                author:'all',
                query:''
        }
}
export default initialState;