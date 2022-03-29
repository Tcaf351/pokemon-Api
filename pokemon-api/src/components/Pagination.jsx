

const Pagination = ({ goToNextPage, goToPrevPage }) => {
    return ( 
        <div className='sm:w-full sm:flex sm:items-center sm:justify-center'>
             <button
             onClick={goToNextPage}
            className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Previous</button>

            <button 
            // onClick={goToPrevPage}
            className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Next</button>
        </div>
     );
}
 
export default Pagination;