const initialState = {
    data: null,
    error: null,
    searching: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_START':
        return {
          ...state,
          searching: true,
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          data: action.data,
          searching: false,
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          error: action.error,
          searching: false,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  