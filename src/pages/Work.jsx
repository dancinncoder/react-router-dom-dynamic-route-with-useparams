import React from 'react';
import { useParams } from 'react-router-dom';
import {data} from '../shared/data';

function Work() {

  const params = useParams();
  console.log(params);

  //어떤 Todo인지 찾아보기
  const foundData = data.find((item)=>{
    return item.id === parseInt(params.id) //parseInt : 숫자형으로 바꿈
  })

  console.log('foundData',foundData);

  return (
    <div>
      <h3>내가 할 일 : {foundData.todo}</h3>
    </div>
  )
}

export default Work