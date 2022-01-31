import React, { useEffect } from 'react';
import Api from '../../pages/modules/api/api';
import {JOBS} from '../../pages/modules/api/endpoints';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {apiActions} from '../../redux/actions/actions';
import {fetchSuccess,
        fetchFailure,
        fetch
} from '../../redux/actions/actions';


const Jobs = () => {

  const state = useSelector(state => state.api)

  const dispatch = useDispatch();

  useEffect( async () => {

    try {
      dispatch(fetch());
      const data = await Api.fetch(JOBS);
      dispatch(fetchSuccess(data));
      
    } catch (e) {
      dispatch(fetchFailure(e));
    }
  }, [])


  return <div>Jobs</div>;
};

export default Jobs;
