import { useState } from "react"

import { getLoanStatusTracker } from "../core/service";

export function Tracker() {
    const [loanId, setLoanId] = useState("")
    const [loanStatus, setLoanStatus] = useState("")


    const handleGetLoanStatus = () => {
        async function loanStatus() {
            const data = await getLoanStatusTracker(loanId)
            setLoanStatus(data.status)
        }
        loanStatus()
    }


    return (
        <>
        
            <div className="max-w-screen-xl mx-auto p-4 py-12">
                
                <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <span className="text-2xl font-bold">Track loan status</span>
                    <div className="grid md:grid-cols-2 md:gap-1">
                        <div>
                            <form className="py-10"  >
                                <div className="relative z-0 w-full mb-6 group">
                                    <input value={loanId} type="text" name="floating_loanid" id="floating_loanid" onChange={(e) => setLoanId(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Loan ID</label>
                                </div>

                            </form>
                        </div>
                        <div className="text-lg p-4 mb-4 " >

                            <button type="button" onClick={handleGetLoanStatus} className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get loan status</button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-1">
                        {
                            loanStatus && <div className="text-base p-4 mb-4 text-blue-800 rounded-lg bg-sky-100 dark:bg-gray-800 dark:text-green-400" role="alert">
                                <span>{loanStatus}</span>
                            </div>}
                    </div>


                </div>



            </div>
        </>
    )
}