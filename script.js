const addCounterEl = document.getElementById("add_counter");
const countersEl = document.getElementById("counters");
const resetEl = document.getElementById("reset");

const initialState = [{ id: 1, value: 0 }];
// action identifiers
const ADD_COUNTER = "addCounter";
const RESET = "reset";
const INCREMENT = "increment";
const DECREMENT = "decrement";

//Action creator
const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
function counterReducer(state = initialState, action) {
  const rest = state.filter((st) => {
    return st.id != action.payload;
  });
  const modify = state.find((st) => {
    return st.id === action.payload;
  });

  console.log("rest", rest);
  console.log("mod", modify);
  if (action.type === ADD_COUNTER) {
    return [
      ...state,
      {
        id: state.length + 1,
        value: 0,
      },
    ];
  }
  if (action.type === RESET) {
    const resetState = [...state]
    for(let i = 0; i<state.length; i++){
        resetState[i].value = 0;
    }
    return [...resetState];
  } else if (action.type === INCREMENT) {
    const modifiedObj = {
      ...modify,
      value: modify.value + action.payload,
    };
    return [...rest, modifiedObj];
  } else if (action.type === DECREMENT) {
    const modifiedObj = {
      ...modify,
      value: modify.value - action.payload,
    };
    return [...rest, modifiedObj];
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  countersEl.innerHTML = state.map((counter) => {
    return `<div
  class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mb-8"
  >
  <div class="text-2xl font-semibold">${counter.value}</div>
  <div class="flex space-x-3">
    <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" onclick=store.dispatch(increment(${counter.id}))>
      Increment
    </button>
    <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onclick=store.dispatch(decrement(${counter.id}))>
      Decrement
    </button>
  </div>
</div>`;
  });
};
//render ui initially
render();
store.subscribe(render);

addCounterEl.addEventListener("click", () => {
  store.dispatch({
    type: ADD_COUNTER,
  });
});
resetEl.addEventListener("click", () => {
  store.dispatch({
    type: RESET,
  });
});
