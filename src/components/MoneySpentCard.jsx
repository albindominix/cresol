import React from 'react'
import { useGobalState } from '../context/ContextApi'

function MoneySpentCard() {
  const{transaction,groupExpenses}=useGobalState()
  const groupedExpenses = groupExpenses(transaction);

const totalAmount = groupedExpenses.reduce((acc,curr)=>acc+ curr.amount,0)

  return (
    <div 
    style={{boxShadow:" rgba(0, 0, 0, 0.09) 0px 3px 12px"}} 
    className=' border max-w-[400px] p-3 flex flex-grow  flex-col items-start gap-4  rounded-lg  '>
      <h1 className='font-bold text-2xl'>Total Spent</h1>
      <h1 className='font-bold text-2xl w-full text-right'>{totalAmount.toLocaleString()}</h1>

    </div>
  )
}

export default MoneySpentCard
