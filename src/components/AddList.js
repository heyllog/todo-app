import React, {useState} from 'react';
import List from './List';
import Badge from './Badge';

import closeSvg from '../assets/img/close.svg';
import '../scss/AddList.scss';


const AddList = ({colors, onAdd}) => {
   const [visiblePopup, setVisiblePopup] = useState(false);
   const [selectedColor, selectColor] = useState(colors[0].id);
   const [inputValue, setInputValue] = useState('');

   function addList() {
      if (!inputValue) {
         alert('Введите название');
         return;
      }

      const badgeColor = colors.find(color => color.id === selectedColor).name;

      onAdd({
         id: Math.random(),
         name: inputValue,
         colorId: selectedColor,
         color: badgeColor,
      });
      onClose();
   }

   function onClose() {
      setVisiblePopup(false);
      setInputValue('');
      selectColor(colors[0].id);
   }

   return (
      <div className="add-list">
         <List
            onClick={() => setVisiblePopup(true)}
            items={[
               {
                  className: 'list__add-button',
                  icon: (
                     <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M8 1V15"
                           stroke="black"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                        <path
                           d="M1 8H15"
                           stroke="black"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  ),
                  name: 'Добавить список'
               }
            ]}
         />
         {visiblePopup && (
            <div className="add-list__popup">
               <img
                  onClick={onClose}
                  src={closeSvg}
                  alt="Close button"
                  className="add-list__popup-close-btn"
               />
               <input
                  className="field"
                  type="text"
                  placeholder="Название списка"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
               />
               <div className="add-list__popup-colors">
                  {colors.map(color => (
                     <Badge
                        onClick={() => selectColor(color.id)}
                        key={color.id}
                        color={color.name}
                        className={selectedColor === color.id && 'active'}
                     />
                  ))}
               </div>
               <button onClick={addList} className="button">Добавить</button>
            </div>
         )}
      </div>
   );
};

export default AddList;
