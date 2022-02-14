import {GrFormAdd} from 'react-icons/gr';
import React, { useState } from 'react';

const Additem = ({handleadd}) => {
    const [names,setNames]=useState('');

    const handleChange=(e)=>
    {
        setNames(e.target.value);
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(names==="")
        {
            alert("Please enter an item");
            return;
        }
        handleadd(names);
        setNames("");
    }
  return (
  <>
   <form onSubmit={handleSubmit}>
   <div className="full">
   <div>
   <input type="text" onChange={handleChange} value={names} className="inputfield" placeholder="Add an item..."></input>
   </div>
    <div>
    <GrFormAdd className="add" type="submit" onClick={handleSubmit}></GrFormAdd>
    </div>    
   </div>
   </form>
  </>
  );
};

export default Additem;