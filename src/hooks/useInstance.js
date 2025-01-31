import { useSelector, useDispatch } from "react-redux";
import { set, remove } from "../store/instanceSlice";
import { useMemo } from "react";

const useInstance = () => {
  const dispatch = useDispatch();

  const { idInstance, apiTokenInstance, phone } = useSelector((state) => state);

  const isAuthenticated = useMemo(() => Boolean(apiTokenInstance), [apiTokenInstance]);

  const handleSet = (auth) => {
    dispatch(set(auth));
  };

  const handleRemove = () => {
    dispatch(remove());
  };

  return {
    idInstance,
    apiTokenInstance,
    phone,
    isAuthenticated,
    set: handleSet,
    remove: handleRemove,
  };
};

export default useInstance;
