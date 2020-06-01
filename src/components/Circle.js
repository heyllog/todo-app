import React from 'react';

function Circle({color}) {
   return (
      <i style={{
         width: 10,
         height: 10,
         background: color,
         borderRadius: '50%',
      }}/>
   );
}

export default Circle;