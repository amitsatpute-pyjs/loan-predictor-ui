import { useState } from "react"
import SignIn from "./SignIn"
import UploadFiles from "./UploadFiles"
import AdditionalInfoForm from "./AdditionalInfoForm"
import MessageCard from "./MessageCard"
import ReviewForm from "./ReviewForm"

const StepperForm = () => {
    const [sktLoanStatusId, setSktLoanStatusId] = useState("")
    const [sktAdditionalInfo, setSktAdditionalInfo] = useState("")
    const [currentComponent, setCurrentComponentState] = useState(0)
    const steps = ["Verify_user", "Upload_documents", "Additional_Info", "Result", "Review"]

    const components: any = {
        0: <SignIn gotoState={setCurrentComponentState} />,
        1: <UploadFiles gotoState={setCurrentComponentState} setSktId={setSktAdditionalInfo} />,
        2: <AdditionalInfoForm gotoState={setCurrentComponentState} setSktId={setSktLoanStatusId} sktId={sktAdditionalInfo} />,
        3: <MessageCard gotoState={setCurrentComponentState} sktId={sktLoanStatusId} />,
        4: <ReviewForm />
    }

    const componentsInfo: any = {
        0: "Please use your mobile number for accessing this platform.",
        1: "Here you need to upload your document.(National Identity Number, TIN, Bank statement)",
        2: "Please check you information is correct or not. You can edit your information.",
        3: "Result",
        4: "Your loan application is in review stage. Please use loan ID for tracking loan application status."

    }

    const componentsImg: any = {
        0: "/mobile.svg",
        1: "/doc.svg",
        2: "/user.svg",
        3: "/result.svg",
        4: ""
    }


    const classProps = (i: number) => (`flex 
    md:w-full items-center ${i <= currentComponent ? "text-blue-600" : "text-gray-500"} 
    dark:text-blue-500 sm:after:content-[''] 
    after:w-full after:h-1 after:border-b ${i < currentComponent ? "after:border-blue-500" : "after:border-gray-200"} after:border-1 
    after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700 `)


    return (
        <>
            <div className="max-w-screen-xl mx-auto p-4 py-12">
                <div className="grid grid-cols-[25%_75%] w-full h-640 gap-3">

                    <div>
                        <div className="text-center py-11 my-10">
                            <img className="mx-auto py-5" src={componentsImg[currentComponent]}></img>
                            <h2 className="text-2xl font-medium">{componentsInfo[currentComponent]}</h2>
                        </div>
                    </div>

                    <div className=" py-4">
                        <div className="w-full max-w-5xl p-4 ">
                            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">

                                {steps.map((step, i) => (
                                    <li className={i < steps.length - 1 ? classProps(i) : `flex items-center  ${i <= currentComponent ? "text-blue-600" : "text-gray-500"} `}>
                                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                            {i <= currentComponent ? <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                                : <span className="mr-2 sm:inline-flex">{i + 1}</span>}
                                            {step}
                                        </span>
                                    </li>
                                ))}

                            </ol>
                            <div className="py-10 flex items-center justify-center">
                                {
                                    components[currentComponent]
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default StepperForm