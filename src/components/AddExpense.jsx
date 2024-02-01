import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGobalState } from "../context/ContextApi";

export default function AddExpense() {
  const { showModal, setShowModal, transaction, setTransaction } =
    useGobalState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setShowModal(false);
    setTransaction((prev) => [...prev, { ...data }]);
    console.log(data);
    reset();
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-6xl my-6 mx-auto ">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*content*/}
                <div className="min-w-[350px] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start  justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-center w-full">
                      Add Your Transaction
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal(false);
                        reset();
                      }}
                    ></button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex flex-col items-end">
                      <label className="flex w-full flex-col gap-2 items-start justify-between  mb-6">
                        <span className="text-gray-700 mr-6">Name</span>
                        <input
                          name="description"
                          id="description"
                          {...register("description", {
                            required: true,
                            maxLength: 30,
                          })}
                          type="text"
                          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="grocery bill"
                        />
                      </label>
                      {errors.name && errors.name.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                      {errors.name && errors.name.type === "maxLength" && (
                        <span className="text-red-600 m-3">
                          Max length exceeded
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-end">
                      <label className="flex w-full flex-col gap-2 items-start justify-between  mb-6">
                        <span className="text-gray-700 mr-6">Date</span>
                        <input
                          name="date"
                          id="date"
                          {...register("date", {
                            required: true,
                          })}
                          type="text"
                          className="block  w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="15/03/2024"
                        />
                      </label>

                      {errors.email && errors.email.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <label className="flex w-full flex-col gap-2 items-start justify-between  mb-6">
                        <span className="text-gray-700 mr-6">category</span>
                        <select
                          name="category"
                          {...register("category", {
                            required: true,
                          })}
                          className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full"
                        >
                          <optgroup label="Category">
                            <option value="" disabled selected hidden>
                              Select Category
                            </option>
                            {[
                              "Food",
                              "Entertainment",
                              "Travel",
                              "Personal Care",
                              "Shopping",
                              "Donations",
                              "Petrol",
                              "Other",
                            ].map((category, index) => (
                              <option key={index}>{category}</option>
                            ))}
                          </optgroup>
                        </select>
                        {errors.category &&
                          errors.category.type === "required" && (
                            <span className="text-red-600 m-3 w-[91%] text-end">
                              This is required
                            </span>
                          )}
                      </label>
                    </div>
                    <div className="flex flex-col items-end">
                      <label className="flex w-full flex-col gap-2 items-start  justify-between ">
                        <span className="text-gray-700 mr-6">Amount</span>
                        <input
                          name="amount"
                          id="amount"
                          {...register("amount", {
                            required: true,
                            pattern: {
                              value: /^[0-9]+$/,
                            },
                          })}
                          type="text"
                          className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 outline-none"
                          placeholder="Rs 550"
                        />
                      </label>
                      {errors.amount && errors.amount.type === "required" && (
                        <span className="text-red-600 m-3">
                          This is required
                        </span>
                      )}
                      {errors.amount && errors.amount.type === "pattern" && (
                        <span className="text-red-600 m-3">Numbers Only</span>
                      )}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-600-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        reset();
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      disabled={isSubmitting}
                      //   onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
