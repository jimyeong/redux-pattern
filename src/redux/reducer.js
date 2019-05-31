import Action from "../actions/action";

const INITIAL_STATE = {
  isSideBarOpen: false,
  mainPopUp: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Action.Types.HANDLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen };
    default:
      return state;
  }
};
