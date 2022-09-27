const store = require("./app/store");
const { fetchPosts } = require("./features/post/postSlice");
const {
  fetchRelatedPosts,
} = require("./features/relatedPost/relatedPostSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
  // console.log(store.getState());
});

// disptach actions
store
  .dispatch(fetchPosts())
  .unwrap()
  .then((post) => {
    store.dispatch(fetchRelatedPosts(post[0].title));
  }).catch(err=>console.log(err))