import React, { useState } from "react";
import { useGobalState } from "../context/ContextApi";

export default function DetailsModal({ detailModal, setDetailModal }) {
  const [showModal, setShowModal] = useState(false);
  const { transaction } = useGobalState();
  return (
    <>
      {detailModal?.open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Your Expense</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    You have spend Rs. <span className="font-bold">{transaction[detailModal.index].amount}</span> for{" "}
                    <span className="font-bold">{transaction[detailModal.index].description}</span>  on the date of{" "}
                    <span className="font-bold">{transaction[detailModal.index].date}</span> 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>
                      setDetailModal((prev) => ({ ...prev, open: false }))
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
