export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    data,
  });
  
  export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    error,
  });
  
  export const fetchData = (requestData) => async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_DATA_START' });
      const response = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
        method: 'POST',
        headers: requestData.headers,
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } else {
        console.log('err');
        dispatch(fetchDataFailure('Error fetching data'));
      }
  
      if (response.status === 401) {
        dispatch(fetchDataFailure('Unauthorized'));
      }
    } catch (error) {
      if (error.message === 'Unauthorized') {
        console.error('Ошибка авторизации. Пожалуйста, войдите с правильным токеном.');
      } else {
        console.error(error);
      }
      dispatch(fetchDataFailure(error));
    }
  };
  