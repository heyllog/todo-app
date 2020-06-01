import React from 'react';
import listSvg from "../../assets/img/list.svg";
import Circle from "../Circle";

import './List.scss';

function List({items}) {
   return (
      <ul className="list">
         <li className="list__main-item">
            <i>
               <img
                  src={listSvg}
                  alt="Icon"
               />
            </i>
            <span>All Tasks</span>
         </li>

         {
            items.map(item => (
               <li className={item.active ? "list__item active" : "list__item"}>
                  {item.color ? <Circle color={item.color}/> : <Circle color="#fdf"/>}
                  <span>{item.name}</span>
               </li>
            ))
         }
      </ul>
   );
}

export default List;