import React from 'react';

import db from '../assets/db';


function Circle({color = 'grey'}) {
   let colorCode = db.colors.find(obj => obj.name === color);
   if (!colorCode) {
      colorCode = db.colors.find(obj => obj.name === 'grey');
   }

   return (
      <i style={{
         width: 10,
         height: 10,
         background: colorCode.hex,
         borderRadius: '50%',
      }}/>
   );
}

export default Circle;