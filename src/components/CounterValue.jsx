import { useSelector } from "react-redux";

function CounterValue() {
  const counterValue = useSelector((state) => state.counter.value);

  return <div>{counterValue}</div>;
}

export default CounterValue;
