import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "./action/actions";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleInrease = () => {
    dispatch(increaseCounter());
  };
  const handleDerease = () => {
    dispatch(decreaseCounter());
  };

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
