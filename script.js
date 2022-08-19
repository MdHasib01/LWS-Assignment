// dom element target
const addCounterBtn = document.getElementById("addCounterBtn");
const resetBtn = document.getElementById("resetBtn");
const parentCounter = document.getElementById("parentCounter");

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// const variable
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_STORE = "addStore";
const RESET = "reset";

// action creator
const incrementAction = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
const decrementAction = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
const addStoreAction = () => {
  return {
    type: ADD_STORE,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

// initial state
let initialState = [{ id: 1, value: 0 }];

// random number generator
const randomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// reducer function
const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const incrementCounter = state.map((c) => {
        if (c.id === action.payload) {
          return {
            ...c,
            value: c.value + c.id,
          };
        } else {
          return { ...c };
        }
      });
      return incrementCounter;
    case DECREMENT:
      const decrementCounter = state.map((c) => {
        if (c.id === action.payload) {
          return {
            ...c,
            value: c.value - c.id,
          };
        } else {
          return { ...c };
        }
      });
      return decrementCounter;
    case ADD_STORE:
      return [...state, { id: state.length + 1, value: 0 }];
    case RESET:
      const resetValue = state.map((val) => {
        return {
          ...val,
          value: 0,
        };
      });
      return resetValue;

    default:
      return state;
  }
};

// create store
const store = Redux.createStore(reducerCounter);

const render = (id) => {
  if (id) {
    const updatedData = store.getState();
    const changeValue = updatedData.filter((val) => val.id === id);
    const targetUi = document.getElementById(id);
    targetUi.innerText = changeValue[0].value;
  } else {
    const updatedData = store.getState();
    updatedData.map((val) => {
      const id = val.id;
      document.getElementById(id).innerText = val.value;
    });
  }
};

store.subscribe(() => render());
// children create function
const children = () => {
  const parentChildren = document.getElementById("parentCounter").children;
  const id = parentChildren.length + 1;
  const div = document.createElement("div");
  div.innerHTML = `
        <div
          class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
          <div class="text-2xl font-semibold counter" id=${id}>0</div>
          <div class="flex space-x-3">
            <button
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onclick="store.dispatch(incrementAction(${id}))"
            >
              Increment
            </button>
            <button
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
              onclick="store.dispatch(decrementAction(${id}))"
            >
              Decrement
            </button>
          </div>
        </div>
  `;
  parentCounter.appendChild(div);
};
// first time children create
children();
// event listener
resetBtn.addEventListener("click", () => {
  store.dispatch(resetAction());
});
addCounterBtn.addEventListener("click", () => {
  children();
  store.dispatch(addStoreAction());
});
