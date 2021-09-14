import React from 'react'
import Card from './Card'

function Results({data}) {
    console.log(data.results);
    return (
        <div className="my-10 px-5 sm:grid md:grid-cols-2 xl:grid-cols-3">
            {data.results.map(e=>{
                return <Card key={e.id} data={e}/>
            })}
        </div>
    )
}

export default Results
