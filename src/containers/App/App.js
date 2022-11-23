import React, {useState} from 'react';
import Counter from '../../components/Counter/Counter';
import Field from '../../components/Field/Field';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import './App.css';

function App() {
  const [cells, setCells] = useState([]);
  const [counter, setCounter] = useState(0);
  const [modal, setModal] = useState(true);
  
  const getRandomKey = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

	const createField = () => {
		const copyStateCells = [...cells];
    const hasItemRandom = Math.floor(Math.random() * 36)

    if (copyStateCells.length >= 36) {
      for (let i = 0; i < 36; i++) {
        copyStateCells.splice(i, copyStateCells.length)
      }
      setCells(copyStateCells);
    } 

    for (let i = 0; i < 36; i++) {
      const cell = {
        hasItem: hasItemRandom === i ? true : false,
        id: getRandomKey(),
        count: true,
      };
      copyStateCells.push(cell)
    }
    setCells(copyStateCells);
    setCounter(0);

    if (modal === false) setModal(!modal);
	};

  const searchItem = (e, id) => {
    const i = cells.findIndex(c => c.id === id);
    const copyState = [...cells];
    const copyCell = {...copyState[i]}

    if (copyCell.count === true) {
      let copyCount = counter;
      copyCount++;
      setCounter(copyCount);
    }

    if (copyCell.hasItem === true) {
      e.currentTarget.classList.add("ring");
      setModal(!modal);
    } else {
      e.currentTarget.classList.add("white")
    }

    copyCell.count = false;
    copyState[i] = copyCell;
    setCells(copyState)
  };

  return (
    <div className="App">
      <Modal
        text={`You made ${counter} attempt`}
        modalClass={`modal-wrap ${modal ? 'none' : 'block'}`}
        click={createField}
      />

      <Button
        text={'START'}
        click={createField}
      />

      <Counter
        text={counter}
      />

      <Field 
        cells={cells}
        click={searchItem}
        className={'cell'}
        />
    </div>
  );
}

export default App;
