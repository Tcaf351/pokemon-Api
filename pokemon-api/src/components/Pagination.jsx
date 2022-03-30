

const Pagination = ({ genOne, genTwo, genThree, genFour }) => {
    return ( 
        <div className='sm:w-full sm:flex sm:items-center sm:justify-center sm:my-10'>
            <button
                onClick={genOne}
                className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Gen 1
            </button>

            <button 
                onClick={genTwo}
                className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Gen 2
            </button>
            <button 
                onClick={genThree}
                className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Gen 3
            </button>
            <button 
                onClick={genFour}
                className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Gen 4
            </button>
        </div>
     );
}
 
export default Pagination;