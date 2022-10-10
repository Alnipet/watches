import { useState } from 'react';
import styles from './App.module.css';
import { TimeInput } from './components/TimeInput';
import { Watches } from './components/Watches';

function App() {
  const [state, setState] = useState([]);

  const handleData = (data) => {
    const filteredState = state.filter((item) => item.name !== data.name);
    setState([...filteredState, data]);
  };

  const handleRemove = (name) => {
    setState((state) => {
      return state.filter((item) => item.name !== name);
    });
  };

  const watchesBlock = state.map((item, i) => {
    return <Watches key={i} data={item} handleRemove={handleRemove} />;
  });

  return (
    <div className={styles.wrapper}>
      <TimeInput handleData={handleData} />
      <div className={styles.section}>{watchesBlock}</div>
    </div>
  );
}

export default App;
