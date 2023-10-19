// const backendUrl = import.meta.env.VITE_BACKEND_SERVICE
const backendUrl = process.env.VITE_BACKEND_SERVICE


console.log("backendurl::",backendUrl)
export const uploadFilesService = async (formData:any): Promise<any> => { 

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

export const getLoanStatus = async (info:Object): Promise<any> => { 

    const resp = await fetch(backendUrl + '/getLoanStatus', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body:JSON.stringify(info)             
        })          
    const data = await resp.json()   
    return data
}

export const verifyOTP = async (otp:number): Promise<any> => { 
    const data:any = {
        otp:otp
    }
    console.log(backendUrl,"backendurl")

    const resp = await fetch(backendUrl + '/verifyotp', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body:JSON.stringify(data)           
        })          
    const resp_data = await resp.json()   
    return resp_data
}