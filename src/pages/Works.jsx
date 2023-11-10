import React from 'react'
import {Link} from 'react-router-dom';
import {data} from '../shared/data';

function Works() {
  return (
    <div>
      <h3>할일목록</h3>
      {data.map((item)=>{
      return (
        <div key={item.id}>
          <span>{item.id}</span>
          
          <Link to={`/works/${item.id}`}><span>{item.todo}</span></Link>
        </div>
        );
    })}
    </div>
    
  );
}

export default Works