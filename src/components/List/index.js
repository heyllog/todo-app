import React from 'react';
import classNames from 'classnames';
import Circle from "../Circle";

import './List.scss';


const List = ({className, items, onClick}) => {
   return (
      // <ul className={className ? "list " + className : "list"}>
      <ul className="list" onClick={onClick}>
         {items.map(item => (
            <li key={item.id} className={classNames(className, {active: item.active})}>
               <i>
                  {item.icon ? (item.icon) : <Circle color={item.color}/>}
               </i>
               <span>{item.name}</span>
            </li>
         ))}
      </ul>
   );
};

export default List;