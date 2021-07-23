import React, { useState } from 'react';
import './App.scss';

export const App = () => {
  const [data, setData] = useState({
    st: [],
    men: [],
    groupsNumber: 0,
  });
  const [preparedSchedule, setPreparedSchedule] = useState('');

  const generate = () => {
    const { st, men, groupsNumber } = data;

    if (st.length === 0 || men.length === 0 || groupsNumber <= 1) {
      return 0;
    }

    const preparedStudents = shuffle(prepareText(st));
    let preparedMentors = prepareText(men);
    let schedule = new Array(groupsNumber).fill([]);

    console.log(preparedMentors);

    const menIndex = 0;

    while (preparedMentors.length < preparedStudents.length) {
      preparedMentors = [...preparedMentors, ...preparedMentors];
    }

    schedule = schedule.map((group, index) => [`\nО   проведе ${preparedMentors[index]} \n`]);

    let groupIndex = 0;

    for (let i = 0; i < preparedStudents.length; i++) {
      if (groupIndex >= schedule.length) {
        groupIndex = 0;
      }

      schedule[groupIndex].push(preparedStudents[i]);
      groupIndex++;
    }

    setPreparedSchedule(schedule.map(el => `\n ${el.join('\n')}`));

    return 0;
  };

  const inputsHandler = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: name === 'groupsNumber' ? +value : value,
    });
  };

  console.log(data);

  return (
    <div>
      <fieldset title="students">
        <legend>students</legend>
        <textarea
          value={data.st}
          name="st"
          onChange={inputsHandler}
        />
      </fieldset>
      <fieldset title="mentors">
        <legend>mentors</legend>
        <textarea
          name="men"
          value={data.men}
          onChange={inputsHandler}
        />
      </fieldset>
      <fieldset title="number of groups">
        <legend>number of groups</legend>
        <input
          type="number"
          name="groupsNumber"
          value={data.groupsNumber}
          onChange={inputsHandler}
        />
      </fieldset>
      <button
        type="button"
        onClick={generate}
      >
        generate
      </button>
      <fieldset>
        <legend>Shedule</legend>
        <textarea
          style={{
            width: '100%',
            height: '100vh',
          }}
          value={preparedSchedule}
          readOnly
        />
      </fieldset>
    </div>
  );
};

function prepareText(str) {
  return str.split('\n')
    .map(el => `@${el.split(' ').join('')}`);
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
