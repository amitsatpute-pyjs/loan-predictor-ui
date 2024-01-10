// const backendUrl = import.meta.env.VITE_BACKEND_SERVICE
const backendUrl = "http://loanpredictor.com/api"

console.log("backendurl::", backendUrl)
const BaseHeaders = {   
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*"
}

const headers={
    ...BaseHeaders,'Content-type': 'application/json',
}



export const uploadFilesService = async (formData: any): Promise<any> => {

    const resp = await fetch(backendUrl + '/uploadfiles', {
        method: 'POST',
        headers: BaseHeaders,
        body: formData,
    })
    const data = await resp.json()
    return data
}

export const getUserInfo = async (): Promise<any> => {

    const resp = await fetch(backendUrl + '/getinfo', {
        method: 'GET',
        headers: headers
    })
    const data = await resp.json()
    return data
}

export const getLoanStatus = async (info: Object): Promise<any> => {

    const resp = await fetch(backendUrl + '/getloanstatus', {
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

    const resp = await fetch(backendUrl + '/verifyotp', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    const resp_data = await resp.json()
    return resp_data
}

export const applyLoan = async (data: any): Promise<any> => {   

    const resp = await fetch(backendUrl + '/applyloan', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    const resp_data = await resp.json()
   
    return resp_data
}


export const getLoanIdDetails = async (id: string): Promise<any> => {

    const resp = await fetch(backendUrl + '/getloaniddetails/' + id, {
        method: 'GET',
        headers: headers,
    })
    const data = await resp.json()
    
    return data
}

export const updateLoanStatus = async (data: any): Promise<any> => {   

    const resp = await fetch(backendUrl + '/updateloanstatus', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    const resp_data = await resp.json()
    
    return resp_data
}

export const getLoanStatusTracker = async (id: string): Promise<any> => {

    const resp = await fetch(backendUrl + '/trackloanid/' + id, {
        method: 'get',
        headers: headers,
    })
    const data = await resp.json()
 
    return data
}


export const getLoanApplications = async (): Promise<any> => {

    const resp = await fetch(backendUrl + '/getloanapplications', {
        method: 'GET',
        headers: headers,
    })
    const data = await resp.json()
    
    return data
}


export const login = async (creds: Object): Promise<any> => {

    const resp = await fetch(backendUrl + '/verifyadmin', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(creds)
    })
    const data = await resp.json()
    return data
}