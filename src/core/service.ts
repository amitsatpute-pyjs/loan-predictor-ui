const backendUrl = "http://127.0.01:5000"


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