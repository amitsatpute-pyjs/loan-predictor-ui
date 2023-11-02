import { useContext } from "react";
import { UserDataContext } from "../core/context/UserData";

const ReviewForm = () => {
    const userData = useContext(UserDataContext) as any;
    // const [userData, setUserData] = useState<any>({
    //     name: "aasads sadsad",
    //     address: "asdsd sdsadsad asdsadsa fdsfdf dsfsdfsdfsdfdsf dfsdfdsf fsdf df dfddf dsfdsfddf",
    //     accountNo: "1232132323232",
    //     aadhar: "23213232133123",
    //     pan: "123v23213",
    //     loanTerm: "11",
    //     cibil: "111",
    //     income: "111111",
    //     bankBalance: "1111111",
    //     education: "grafef",
    //     jobType: "sdassad",
    //     dependents: "3",
    //     loanAmount: "3333333",
    //     cashInflow: "33",
    //     cashOutflow: "33",
    //     contact: "3333333333",
    //     loanId: "3243243243243432432"
    // })

    const keys = Object.keys(userData)
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
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

                <div className="text-lg p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span className="font-medium">Your application is submitted successfully..!</span> &nbsp;&nbsp; Your loan Id : <span className="font-medium">{userData.loanId} </span></div>
                <form className="py-5"  >

                    <div className="grid md:grid-cols-3 md:gap-1">
                        {keys.map((k: string) => (
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

        </>
    )
}

export default ReviewForm;