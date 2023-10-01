import { useContext, useEffect, useState } from "react"
import { uploadFilesService } from "../core/service"
import { SocketContext } from "../core/context/socket";


const UploadFiles = (): JSX.Element => {
    const socket = useContext(SocketContext);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [UploadedFileNames, setUploadedFileNames] = useState([]);

    const [sktTopic,setSktTopic] = useState("")

    useEffect(()=>{
        socket.on(sktTopic, (data) => {
            console.log("connected uploadfile", data)
          })
    },[sktTopic])
    
    

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileNames:any = []
            for (const i of event.target.files){
                fileNames.push(i.name)
            }
            setUploadedFileNames(fileNames)
            setSelectedFiles(event.target.files);
           
        }
    };

    const handleUpload = async () => {
        if (!selectedFiles || selectedFiles.length === 0) {
            alert('Please select one or more files to upload.');
            return;
        }

        const formData = new FormData();    
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }
         const task = await uploadFilesService(formData)
         console.log(task)
         setSktTopic(task.taskId)
         
        
    };


    return (
        <>
            <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-3">
                    <label className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Upload your documents</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="formFile"
                        onChange={handleFileChange}
                        multiple />
                </div>
                <div>
                    <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleUpload}>Upload</button>
                </div>
                <div>
                    <span>Uploaded files:</span>
                    <ul>
                        {
                            UploadedFileNames && UploadedFileNames.map((file)=><li>{file}</li>)
                        }
                    </ul>
                   
                </div>


            </div>
        </>
    )
}


export default UploadFiles