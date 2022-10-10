import React, { useRef } from 'react';
import styles from './TimeInput.module.css';

export const TimeInput = ({ handleData }) => {
  const nameRef = useRef();
  const timezoneRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    handleData({
      name: nameRef.current.value,
      timezone: timezoneRef.current.value,
    });
  };

  return (
    <div>
      <form name="timeForm" className={styles.wrapper} onSubmit={onSubmit}>
        <div className={styles.inputInner}>
          <span htmlFor="name" className={styles.text}>
            Name
          </span>
          <input name="name" ref={nameRef} type="text" required></input>
        </div>
        <div className={styles.inputInner}>
          <span className={styles.text} htmlFor="timezone">
            Timezone
          </span>
          <input
            name="timezone"
            ref={timezoneRef}
            type="number"
            defaultValue={0}
            max={15}
            min={-15}
            required
          ></input>
        </div>

        <button>Add</button>
      </form>
    </div>
  );
};
