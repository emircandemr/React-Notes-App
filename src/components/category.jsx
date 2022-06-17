import React from 'react'

function Category({status,setStatus}) {

    const FilterFunc = (e) => {
        const statu = e.target.innerHTML
        setStatus(statu)
    }


  return (
    <div className='w-full mt-10 mb-3 flex justify-center items-center'>

        <div className='w-1/3 flex justify-center items-center'>

            <div className={`bg-white rounded-2xl px-3 py-2 border border-gray-300 shadow-2xl cursor-pointer hover:bg-slate-200 hover:border-purple-700  mr-2 w-auto
            ${status==="Active" ? "border border-purple-700 bg-slate-200" : ""}`} onClick={ (e) => {
                FilterFunc(e)
            }}>
                Active
            </div>

            <div className={`bg-white rounded-2xl px-3 py-2 border border-gray-300 shadow-2xl cursor-pointer hover:bg-slate-200 hover:border-purple-700  mr-2 w-auto
            ${status==="ALL" ? "border border-purple-700 bg-slate-200" : ""}`} onClick={ (e) => {
                FilterFunc(e)
            }}>
                ALL
            </div>

            <div className={`bg-white rounded-2xl px-3 py-2 border border-gray-300 shadow-2xl cursor-pointer hover:bg-slate-200 hover:border-purple-700  mr-2 w-auto
            ${status==="Completed" ? "border border-purple-700 bg-slate-200" : ""}`} onClick={ (e) => {
                FilterFunc(e)
            }}>
                Completed
            </div>


        </div>

    </div>
  )
}

export default Category