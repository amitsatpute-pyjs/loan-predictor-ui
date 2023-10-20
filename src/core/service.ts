// const backendUrl = import.meta.env.VITE_BACKEND_SERVICE
const backendUrl = "http://loanpredictor.com/api"


console.log("backendurl::", backendUrl)
const headers = {
    'Content-type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*"
}
export const uploadFilesService = async (formData: any): Promise<any> => {

    const resp = await fetch(backendUrl + '/uploadfiles', {
        method: 'POST',
        body: formData,
    })
    const data = await resp.json()
    return data
}

export const getUserInfo = async (): Promise<any> => {

    const resp = await fetch(backendUrl + '/getinfo', {
        method: 'GET'
    })
    const data = await resp.json()
    return data
}

export const getLoanStatus = async (info: Object): Promise<any> => {

    const resp = await fetch(backendUrl + '/getLoanStatus', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(info)
    })
    const data = await resp.json()
    return data
}

export const verifyOTP = async (otp: number): Promise<any> => {
    const data: any = {
        otp: otp
    }
    console.log(backendUrl, "backendurl")

    const resp = await fetch(backendUrl + '/verifyotp', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const resp_data = await resp.json()
    return resp_data
}