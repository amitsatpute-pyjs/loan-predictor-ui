import { useState } from "react"
import { verifyOTP } from "../core/service"

const SignIn = (props: any): JSX.Element => {
    const [otpFlag, setOtpFlag] = useState(false)
    const [otp, setOTP] = useState<number | null>(null)

    const handleSendOTP = () => {
        setOtpFlag(true)
    }

    const handleEnter = async () => {
        if (otp) {
            const verify = await verifyOTP(otp)
            if (verify.status){
                props.gotoState(1)
            }else{
                alert("Wrong OTP")
            }
            
        }   

    }

    return (
        <>
            <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your mobile number</label>
                        <input type="number" name="mobile" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9876543210" required />
                    </div>
                    {!otpFlag && <div>
                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSendOTP}>Send OTP</button>
                    </div>}
                    {otpFlag && <><div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter received OTP</label>
                        <input type="text" name="otp" id="otp" onChange={(e) => setOTP(Number(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                        <button type="button" onClick={handleEnter} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            If not received a OTP ? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Resend OTP</a>
                        </div>
                    </>
                    }
                </form>

            </div>


        </>
    )
}

export default SignIn