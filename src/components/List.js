import React from 'react';
import classNames from 'classnames';
import Badge from './Badge';

import '../scss/List.scss';
import removeSvg from '../assets/img/remove.svg'

const List = ({items, isRemovable, onClick, onRemove}) => {

   function removeList(item) {
      if (window.confirm('Вы точно хотите удалить этот список?')) {
         onRemove(item);
      }
   }

   return (
      <ul onClick={onClick} className="list">
         {items.map((item, index) => (
            <li
               key={index}
               className={classNames(item.className, {active: item.active})}
            >
               <i>{item.icon ? item.icon : <Badge color={item.color}/>}</i>
               <span>{item.name}</span>
               {
                  isRemovable &&
                  <img
                     className='list__remove-icon'
                     src={removeSvg}
                     alt='Del'
                     onClick={() => removeList(item)}
                  />
               }
            </li>
         ))}
      </ul>
   );
};

export default List;
