import { useState } from "react"
import SignIn from "./SignIn"
import UploadFiles from "./UploadFiles"
import AdditionalInfoForm from "./AdditionalInfoForm"
import MessageCard from "./MessageCard"

const StepperForm = () => {
    const [sktLoanStatusId, setSktLoanStatusId] = useState("")
    const [currentComponent, setCurrentComponentState] = useState(0)
    const steps = ["Verify_user", "Upload_document", "Additional_Info", "Result"]

    const components: any = {
        0: <SignIn gotoState={setCurrentComponentState} />,
        1: <UploadFiles gotoState={setCurrentComponentState} />,
        2: <AdditionalInfoForm gotoState={setCurrentComponentState}  setSktId={setSktLoanStatusId}/>,
        3: <MessageCard gotoState={setCurrentComponentState} sktId={sktLoanStatusId}/>
    }  

    const classProps = (i: number) => (`flex 
    md:w-full items-center ${i <= currentComponent ? "text-blue-600" : "text-gray-500"} 
    dark:text-blue-500 sm:after:content-[''] 
    after:w-full after:h-1 after:border-b ${i < currentComponent ? "after:border-blue-500" : "after:border-gray-200"} after:border-1 
    after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`)

    return (
        <>
            <div className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
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
        </>
    )
}

export default StepperForm