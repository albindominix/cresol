import React from 'react'

function CategoryCard({item}) {
  return (
    <div className=' flex flex-col bg-gray-400 rounded-md p-3 gap-3 flex-grow min-w-40  shadow-md'>
      <div className='font-bold text-md text-left text-white '>{item.category}</div>
      <div className='flex items-center justify-between'>
        <div>icon</div>
        <div className='font-bold text-lg text-white '>{item.amount.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default CategoryCard
