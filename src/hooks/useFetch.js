import { fetchStatus } from 'constants';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useFetch = (callback, isInitialRequest) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(fetchStatus.IDLE);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(fetchStatus.LOADING);
      try {
        const data = await callback();
        setData(data);
        setStatus(fetchStatus.SUCCESS);
      } catch (error) {
        toast.error(error.message);
        setStatus(fetchStatus.ERROR);
      }
    };

    fetchData();
  }, [callback, isInitialRequest]);

  return { data, status };
};

export const useFetchPages = (callback, isInitialRequest) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(fetchStatus.IDLE);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(fetchStatus.LOADING);
      try {
        const data = await callback();
        setData(prev =>
          isInitialRequest
            ? data
            : { ...prev, results: [...prev.results, ...data.results] }
        );
        if (
          data.results !== undefined &&
          data.results.length !== 0 &&
          data.page === 1
        ) {
          // toast.success(`We found ${data.total} movies`);
        }
        setStatus(fetchStatus.SUCCESS);
      } catch (error) {
        toast.error(error.message);
        setStatus(fetchStatus.ERROR);
      }
    };

    fetchData();
  }, [callback, isInitialRequest]);

  return { data, status };
};
