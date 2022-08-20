import React from "react";


export default function({ ...props}){
 
  let {data} = props
  
  if(data.length > 0){
    const ListItems = data.map((item,index)=>
    <>
      
      
         
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.birthday}</td>
            <td> {item.sex}</td>
            <td> {item.mobile}</td>
            <td> {item.GovtID}</td>
            <td> {item.GuardianName}</td>

          </tr>
          
      
    </>
    )
    return(
       <table >
        <tr>
          <th>Name</th>
          <th>Birth</th>
          <th>Gender</th>
          <th>mobile</th>
          <th>GovtID</th>
          <th>Guadian</th>
          


        </tr>
        {ListItems}
        </table>
    )
 
  }
}