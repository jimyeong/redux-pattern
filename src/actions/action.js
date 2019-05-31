const Action = {
  Types: {
    HANDLE_SIDEBAR: "HANDLE_SIDEBAR",
    UPDATE_STATE: "UPDATE_STATE"
  },
  Creators: {
    isSideBarOpen: () => ({
      type: Action.Types.HANDLE_SIDEBAR
    }),
    updateState: props => ({
      type: Action.Types.UPDATE_STATE,
      props: props
    })
  }
};

export default Action;
