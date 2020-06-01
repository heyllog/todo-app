import React from 'react';
import List from "./components/List";


function App() {
   return (
      <div className="todo">
         <div className="todo__sidebar">
            <List items={[
               {
                  color: '#42b883',
                  name: 'Books',
               },
               {
                  color: '#64c4ed',
                  name: 'Movies',
               },
               {
                  name: 'Education',
                  active: true,
               },
            ]}/>
         </div>
         <div className="todo__tasks">

         </div>
      </div>
   );
}

export default App;
