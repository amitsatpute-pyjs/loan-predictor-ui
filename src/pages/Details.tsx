import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getLoanIdDetails, updateLoanStatus } from "../core/service";

export function DetailsPage() {
    const params = useParams();
    const navigate = useNavigate()
    const [userData, setUserData] = useState<any>({})
    const [fields, setFileds] = useState<Array<string>>([])

    useEffect(() => {
        const loanId = params.loanid as string;
        async function getLoanIdInfo() {
            const data = await getLoanIdDetails(loanId)            
            const keys = Object.keys(data)           
            setFileds(keys)
            setUserData(data)
        }
        getLoanIdInfo()
    }, [])

    const hangleGoBack=()=>{
        navigate("/admin")
    }

    const handleApprove = (state:string)=>{
        async function loanStatus() {
            await updateLoanStatus({loanId:userData.loanId,status: state})
            hangleGoBack()
        }
        loanStatus()
    }

    const stringFormater = (text: string): string => {
        const str = text
            .replace(/(_|-)/g, ' ')
            .trim()
            .replace(/\w\S*/g, function (str) {
                return str.charAt(0).toUpperCase() + str.substr(1)
            })
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        return str
    }

    let loanInfo = []
    try {
        loanInfo = userData.reason
    } catch (e) {

    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-4 py-12">
                <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 md:gap-1">
                        <div className="text-lg p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">loan Id : <span className="font-medium">{userData.loanId} </span> </span>
                        </div>

                        <div className="text-lg p-4 mb-4 " >

                            <button type="button" onClick={hangleGoBack} className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go back</button>
                            <button type="button" onClick={()=>handleApprove("Rejected")} className="float-right focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reject</button>
                            <button type="button" onClick={()=>handleApprove("Approved")} className="float-right focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Approve</button>
                        </div>
                    </div>
                    <form className="py-5"  >
                        <div className="grid md:grid-cols-3 md:gap-1">
                            {fields && fields.map((k: string) => (
                                <>
                                    {!(["loanid", "task_id", "reason"].includes(k.toLowerCase())) && <div className="relative z-0 w-full mb-6 group">
                                        <span className="font-bold"> {stringFormater(k)} :</span><br />
                                        <span>{userData[k]}</span>
                                    </div>}
                                </>
                            ))}
                        </div>
                        {loanInfo && <div className="grid md:grid-cols-1 md:gap-1">
                            <div className="text-base p-4 mb-4 text-blue-800 rounded-lg bg-sky-100 dark:bg-gray-800 dark:text-green-400" role="alert">
                                <ul className="list-disc px-5">
                                    {
                                        loanInfo.map((d: any) => (
                                            <li>{d}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>}



                    </form>
                </div>



            </div>
        </>
    )
}