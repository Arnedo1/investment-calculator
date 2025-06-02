const InputBox = ( props ) => {

    return (
        <div className='flex justify-center'>
            <div className='flex mx-auto flex-col gap-3 w-9/10 sm:border border-white max-w-[400px] rounded-sm mt-20 py-5'>
                <div className='flex flex-col sm:flex-row sm:mb-2 mx-auto px-5 gap-3'>
                    <input
                        placeholder='Years'
                        onChange={ ( e ) => props.setYears( e.target.value ) }
                        value={ props.years }
                        className='text-gray-700 h-8 px-3 max-w-[170px] bg-gray-300 rounded' type="number"
                        required
                    />
                    <input
                        placeholder='Initial value'
                        onChange={ ( e ) => props.setInitial( e.target.value ) }
                        value={ props.initial }
                        className='px-3 text-black max-w-[170px] bg-gray-300 h-8 rounded' type="number"
                        required
                    />
                </div>
                <div className='flex flex-col mx-auto sm:flex-row px-5 gap-3'>
                    <input
                        onChange={ ( e ) => props.setRendament( e.target.value ) }
                        value={ props.rendament }
                        placeholder='Rendament'
                        className='px-3 h-8 bg-gray-300 max-w-[170px]  rounded'
                        required
                        type="number"
                    />
                    <input
                        placeholder='Add end of year'
                        onChange={ ( e ) => props.setAddEnd( e.target.value ) }
                        value={ props.addEnd }
                        className='bg-gray-300 max-w-[170px] h-8 px-3  rounded'
                        type="number"
                        required
                    />
                </div>
                <button 
                onClick={()=> (
                    props.setResults([
                        props.addEnd,
                        props.initial,
                        props.rendament,
                        props.years]),
                        props.setAddEnd(''),
                        props.setInitial(''),
                        props.setRendament(''),
                        props.setYears('')
                )}
                className='rounded sm:mt-2 mx-auto active:translate-y-0.5 cursor-pointer bg-amber-600 py-1 w-30 text-white'>CALCULATE</button>
            </div>

        </div>
    )
}

export default InputBox