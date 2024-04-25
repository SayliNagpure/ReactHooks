// import React, { useState, useTransition } from 'react'

// const UseTranstionhook = () => {

//       const [searchTerm, setSearchTerm] = useState('');
//       const [filtered, setFiltered] = useState(users);
    
//       const handleChange = ({ target: { value } }) => {
//         setSearchTerm(value);
//         setFiltered(users.filter((item) => item.name.includes(value)));
//       };
    
//       return (
//         <div className="container">
    
//           <div>
//             {
//               users.length !== filtered.length 
//                ? `${filtered.length} matches` 
//                : null 
//             }
//           </div>
    
//             <input 
//                 onChange={handleChange} 
//                 value={searchTerm} 
//                 type="text" 
//                 placeholder="Type a name"/>
    
//             <div className="cards">
//                 {filtered.map((user) => (
//                    <div class="card">
//                      <div className="profile">
//                        <img 
//                          src={user.avatar} 
//                          alt="avatar" />
//                      </div>
//                      <div className="body">
//                        <strong>{user.name}</strong>
//                      </div>
//                    </div>
//                 ))}
//             </div>
    
//         </div>
//       );
//     }
    
 


// export default UseTranstionhook

import React, { useState, useTransition } from 'react'

const UseTranstionhook = () => {
        const [input, setInput] = useState("");
        const [isPending, startTransition] = useTransition();
        const [list, setList] = useState([]);
       
        const LIST_SIZE = 20000;
       
        const handleChange = (e) => {
          setInput(e.target.value); // high priority
          startTransition(() => {
            const arr = [];
            for (let i = 0; i < LIST_SIZE; i++) {
              arr.push(e.target.value);
            }
            setList(arr);
          });
        };
       
        return (
          <>
            <input type="text" value={input} onChange={handleChange}></input>
            {isPending
              ? "Loading...."
              : list.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
          </>
        );
      };



//   return (
//     <div>UseTranstionhook</div>
//   )


export default UseTranstionhook