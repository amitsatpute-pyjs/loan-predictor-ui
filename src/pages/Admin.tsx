import { useEffect, useState } from "react"
import { getLoanApplications, updateLoanStatus } from "../core/service"

export function AdminPage() {

    const [loanApplications, setLoanApplications] = useState<any>([])

    useEffect(() => {
        async function loanApplications() {
            const data = await getLoanApplications()
            setLoanApplications(data)
        }
        loanApplications()
    }, [])

    const handleApprove = (id: string, state: string) => {
        async function loanStatus() {
            await updateLoanStatus({ loanId: id, status: state })

        }
        loanStatus()
    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Loan Applications
                            {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                        </caption>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Loan ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Customer Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Loan Amount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                loanApplications && loanApplications.map((la: any) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap dark:text-white">
                                            <a href={`/details/${la.loanId}`}>{la.loanId}</a>
                                        </th>
                                        <td className="px-6 py-4">
                                            {la.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {la.loanAmount}
                                        </td>
                                        <td className="px-6 py-4">
                                            {la.status}
                                        </td>
                                        <td className="px-6 py-4 text-right justify-center">

                                            {
                                                ["rejected", "pending"].includes(la.status.toLowerCase()) ?
                                                    <a onClick={() => handleApprove(la.loanId, "Approved")} className="font-medium text-green-600 dark:text-blue-500 hover:underline  cursor-pointer">Approve</a>
                                                    :
                                                    <span className="font-medium text-gray-400 dark:text-blue-500">Approve</span>
                                            }
                                            {
                                                ["approved", "pending"].includes(la.status.toLowerCase()) ?
                                                    <a onClick={() => handleApprove(la.loanId, "Rejected")} className="mx-4 font-medium text-red-600 dark:text-blue-500 hover:underline  cursor-pointer">Reject</a>
                                                    :
                                                    <span className="mx-4 font-medium text-gray-400 dark:text-blue-500">Reject</span>
                                            }


                                        </td>
                                    </tr>
                                ))
                            }




                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}