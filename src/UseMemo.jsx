import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const[data,setData]=useState(null);
    const [toogele, setToogele] = useState(false)
    useEffect(()=>{
        ftchData();
    },[])
    async function ftchData(){
   fetch("https://jsonplaceholder.typicode.com/comments").then(
        (data)=>data.json()).then(
            (data)=>setData(data)
        )
  
    }
    console.log('data', data)
    const findLongestName=(comment)=>{
        if(!comment) return ;
        let longestname="";
        for(let i=0; i<comment.length;i++){
            let currentName=comment[i].name;
            if(currentName.length>longestname.length){
                longestname=currentName;
            }
        }
        console.log("completed get comment");
        return longestname;
    }

    // re-call the findlongestname function only when data value changed using useMemo
    const getLongestName=useMemo(()=>{
        findLongestName(data)
    }
        ,[data]);
  return (
    <div>
        <h1>USEMEMO</h1>
            <h2>{getLongestName}</h2>
            <button
            onClick={()=>{
                setToogele(!toogele)
            }}
            >
                    toggle
            </button>
            {
                toogele && <h1>Toogle</h1>
            }
    </div>
  )
}

export default UseMemo