import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './Watches.module.css';

export const Watches = ({ data, handleRemove }) => {
  const [time, setTime] = useState(moment().utcOffset(+data.timezone));

  useEffect(() => {
    const idInterval = setTimeout(function add() {
      setTime(moment().utcOffset(+data.timezone));
      setTimeout(add);
    });
    return () => clearInterval(idInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleInner}>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.cansel} onClick={() => handleRemove(data.name)}>
          X
        </div>
      </div>

      <div className={styles.time}>{time ? time.format('HH:mm:ss') : null}</div>
    </div>
  );
};
