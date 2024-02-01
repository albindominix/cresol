import React, { useState } from "react";
import { useGobalState } from "../context/ContextApi";
import AddExpense from "./AddExpense";
import DetailsModal from "./DetailsModal";

function Table() {

  const {showModal,setShowModal,transaction}= useGobalState()
const[detailModal,setDetailModal] = useState({open:false})
  return (<>
  <AddExpense/>
<DetailsModal detailModal={detailModal} setDetailModal={setDetailModal}/>
    <div className="flex flex-col scale-[1.1]  px-4">
      <div className="">
        <div className="w-full relative flex flex-col bg-clip-border rounded-xl mb-3  bg-white text-gray-700 overflow-hidden xl:col-span-2  shadow-sm ">
          <div className="flex items-center justify-between p-2 border-b">
            <div className="p-3 font-bold text-lg">Transactions</div>
            <button className='px-3 py-2 rounded-md bg-blue-500 font-semibold text-white text-sm ' onClick={() => setShowModal(true)}>Add +</button>

          </div>
          <table className="block h-60 overflow-y-scroll min-w-full text-left text-sm font-light border-collapse ">
            <thead className=" dark:border-neutral-500 sticky top-0 bg-white">
              <tr>
                <th
                  scope="col"
                  className="border-b border-blue-gray-50 text-slate-400 py-2 px-5  font-bold text-[10px]  antialiased font-sans   uppercase text-blue-gray-400 text-center"
                >
                  Description{" "}
                </th>
                <th
                  scope="col"
                  className="border-b border-blue-gray-50 text-slate-400 py-2 px-5  font-bold text-[10px]  antialiased font-sans   uppercase text-blue-gray-400 text-center"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="border-b border-blue-gray-50 text-slate-400 py-2 px-5  font-bold text-[10px]  antialiased font-sans   uppercase text-blue-gray-400 text-center"
                >
                  Category{" "}
                </th>
                <th
                  scope="col"
                  className="border-b border-blue-gray-50 text-slate-400 py-2 px-5  font-bold text-[10px]  antialiased font-sans   uppercase text-blue-gray-400 text-center"
                >
                  Amount{" "}
                </th>
                <th
                  scope="col"
                  className="border-b border-blue-gray-50 text-slate-400 py-2 px-5  font-bold text-[10px]  antialiased font-sans   uppercase text-blue-gray-400 text-center"
                ></th>
              </tr>
            </thead>
            <tbody className=" ">
              {transaction.length>0 ?
               ( transaction.map((item, index) => (
                  <tr
                    className="    dark:border-neutral-500 dark:hover:bg-neutral-600"
                    key={index}
                  >
                    <td className="whitespace-nowrap border-b px-5 py-2  antialiased font-sans text-xs font-semibold capitalize  text-blue-gray-400 text-center">
                      {item.description}
                    </td>
                    <td className="whitespace-nowrap border-b px-5 py-2  antialiased font-sans text-xs font-semibold capitalize  text-blue-gray-400 text-center">
                      {item.date}
                    </td>
                    <td className="whitespace-nowrap border-b px-5 py-2  antialiased font-sans text-xs font-semibold capitalize  text-blue-gray-400 text-center">
                    <span className="px-2 py-1 border rounded-full">{item.category}</span> 

                    </td>
                    <td className="whitespace-nowrap border-b px-5 py-2  antialiased font-sans text-xs font-semibold capitalize  text-blue-gray-400 text-center">
                      {item.amount}
                    </td>
                    <td className=" whitespace-nowrap border-b px-5 py-2 antialiased font-sans text-xs font-semibold capitalize  text-blue-gray-400  text-center">
                      {/* <Modal book={item}/> */}
                      <button onClick={()=>setDetailModal({index:index,open:true})} className=" text-white bg-red-500 py-1 px-3  font-bold text-[10px] rounded-md  antialiased font-sans   uppercase text-blue-gray-400 text-center">
                        details
                      </button>
                    </td>
                  </tr>
                ))):
                <div className="flex relative left-full h-[10rem] items-center text-center justify-center font-semibold"> Add Your Transactions</div>}
            </tbody>
          </table>
        </div>

        {/*   
          <table class="border-separate border-spacing-2 border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 ">State</th>
      <th className="border border-slate-300 ">City</th>
      <th className="border border-slate-300 ">City</th>
      <th className="border border-slate-300 ">City</th>
      <th className="border border-slate-300 ">City</th>
    </tr>
  </thead>
  <tbody>
  {[1,2,3,4,5].map(item=>(
     <tr className='border border-slate-300'>
     <td className="">Indiana</td>
     <td className="">Indianapolis</td>
     <td className="">Indiana</td>
     <td className="">Indianapolis</td>
     <td className="">Indiana</td>
   </tr>
  )) }
   
  </tbody>
</table> */}
      </div>
    </div>
    </>
  );
}

export default Table;
