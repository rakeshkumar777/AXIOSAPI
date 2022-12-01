import React, { useState } from 'react'

const DynamicInput = () => {
    const [data,setData]=useState("")
    const [hobby, setHobby] = useState([""])


    return (
        <>
            <button className="btn btn-success" onClick={() => { setHobby([...hobby, " "]) }} style={{marginLeft:"600px",marginBottom:"20px"}} >Add Hobbies</button><br />
            {
                hobby.map((item,index) =>
                    <>
                        <center>
                            <input  value={item} style={{marginRight:"10px"}} />
                            <button onClick={(item)=>{
                              const newarr =hobby.filter((i,j)=>{
                                return (index!=j)
                              })
                              setHobby(newarr)
                            }} className='btn btn-danger'  >DELETE</button><br /><br/>
                        </center>


                    </>
                )}



        </>
    )
}

export default DynamicInput
