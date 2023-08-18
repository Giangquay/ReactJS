import React, { useEffect, useState } from 'react';

import Card from '../card';

import './card.css';
const userInfo = {
    image:"https://picsum.photos/200",
    name:"ROBORT PATTINSON",
    role:"developer",
    birthday:"23/05/2014",
    mark:"B+",
    edu:"MCA",
    address:"Bangalore",
    email:"robot12@gmail.com",
    phone:"0900909099",
    age: 18,
  };
function CardList(props) {
    const [user, setUser] = useState(userInfo);

    useEffect(()=>{
      setUser((per)=>({
        ...per,
        name:'Nguyen Minh Giang',
        phone:"09996669999"
      }))
    },[])
    console.log('««««« user »»»»»', user);

    const onePlusTime=()=>{
      setUser((perStatus)=>({
          ...perStatus,
          age:perStatus.age+1
      }))
    }
    const onMinusTime=()=>{
      setUser((preState) => ({
        ...preState,
        age: preState.age - 1
      }));
    }
    const onReset=()=>{
      setUser((preState) => ({
        ...preState,
        age:preState.age=0
      }))
    }
    return (
        <div className='cardlist'>
            <Card info={user}
                  onPlusAge={onePlusTime}
                  onMinusAge={onMinusTime}
                  onReset={onReset}
                  />
        </div>
        
    )
}

export default CardList;