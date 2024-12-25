import React from 'react'


const obj =[
    {   type:'Savings',
        color: '#f9c74f',
        percent:45
    },
    {   type:'Investment',
        color: '#f9c74f',
        percent:30
    },
    {   type:'Expense',
        color: '#f9c74f',
        percent:20
    }
]
export default function Labels() {
  return (
    <>
    {
        obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)
    }
    </>
  )
}

function LabelComponent ({data}){
    if(!data) return <></>
    return(
        <div className="labels d-flex flex-column gap-5">
        
            <div className='d-flex  mb-3'>
                <div className='rounded py-3' style={{width:'10px',height:'10px',background:data.color??'#f9c74f'}}></div>
            <h3>{data.type??""}:</h3>
            <h3>{data.percent??0}%</h3>
            </div>

        
        
       
        

    </div>
    )
}