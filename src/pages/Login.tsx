import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../core/service";


export function LoginPage() { 
    const navigate = useNavigate()
    const [creds, setCreds] = useState({
        username: "",
        password: ""

    })


    const handleLogin = async (e: any) => {
        e.preventDefault()
        const data = await login(creds)
        if (data.status) {
            sessionStorage.setItem('authData', JSON.stringify(data));
            navigate("/admin")
        }
        else {
            alert("Invalid credentials..!")
        }
    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-center">
                <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Admin panel</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                            <input type="text" name="username" id="username" onChange={(e) => setCreds({ ...creds, username: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => setCreds({ ...creds, password: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>


                    </form>

                </div>
            </div>
        </>
    )
}