import React from 'react'

const ResultsList = (props) => {
    
  return (
    <div>
       <table className='w-9/10 max-w-[600px] mx-auto sm:mt-4 border-collapse text-white'>
        <thead>
        <tr className=" divide-x border-b">
            <th className="px-1 py-3  text-xs font-medium uppercase ">Years</th>
            <th className="px-1 py-3  text-xs font-medium  uppercase ">Initial</th>
            <th className="px-1 py-3  text-xs font-medium  uppercase ">Ren %</th>
            <th className="px-1 py-3  text-xs font-medium  uppercase ">Total</th>
            <th className="px-1 py-3  text-xs font-medium  uppercase ">Added</th>
        </tr>
        </thead>
        <tbody className="divide-y">
        {props.results && props.results[3] && 
                (() => {
                    let currentValue = parseFloat(props.results[1]);
                    return Array.from({ length: parseInt(props.results[3]) }, (_, index) => {
                        const initialValue = currentValue;
                        const totalValue = initialValue * (1 + parseFloat(props.results[2])/100);
                        const addedValue = parseFloat(props.results[0]);
                        
                        
                        currentValue = totalValue + addedValue;
                        
                        return (
                            <tr key={index} className="divide-x">
                                <td className="px-1 py-2 text-center">{index + 1}</td>
                                <td className="px-1 py-2 text-center">{initialValue.toLocaleString('de-DE')}</td>
                                <td className="px-1 py-2 text-center">{props.results[2]}%</td>
                                <td className="px-1 py-2 text-center">{totalValue.toLocaleString('de-DE')}</td>
                                <td className="px-1 py-2 text-center">{addedValue.toLocaleString('de-DE')}</td>
                            </tr>
                        )
                    });
                })()
            }
        </tbody>
       </table>
    </div>
  )
}

export default ResultsList