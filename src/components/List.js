import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import removeSvg from '../assets/img/remove.svg';

import Badge from './Badge';

import '../scss/List.scss';

const List = ({items, isRemovable, onChooseList, onRemove, onAddItem}) => {
   const removeList = item => {
      if (window.confirm('Вы действительно хотите удалить список?')) {
         axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
            onRemove(item.id);
         });
      }
   };

   return (
      <ul onClick={onAddItem} className="list">
         {items.map((item, index) => (
            <li
               key={index}
               className={classNames(item.className, {active: item.active})}
               onClick={() => onChooseList(item.id - 1)}
            >
               <i>{item.icon ? item.icon : <Badge color={item.color.name}/>}</i>
               <span>{item.name}</span>
               {isRemovable && (
                  <img
                     className="list__remove-icon"
                     src={removeSvg}
                     alt="Remove icon"
                     onClick={() => removeList(item)}
                  />
               )}
            </li>
         ))}
      </ul>
   );
};

export default List;
