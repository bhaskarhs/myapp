// Home.tsx

import React, { FC, useEffect, useState } from 'react';
import "../../App.scss"
import axios from 'axios';
import { apiUrlEndPoint, baseUrl } from '../../api/url';
import useModal from '../../utlis/customHooks/useModal';
import Modal from '../../uikit/Modal';

export interface File {
    id: number;
    name: string | null;
    created_at: string;
    updated_at: string;
    active: boolean;
    status: string;
    leads: string | number;
    files: string
}

export interface FileListComponentProps {
    filesList: File[];
}



const Home: FC = () => {
    const [filesList, setFilesList] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [runningFileId, setRunningFileId] = useState<string | number>('')
    const { isOpen, toggle } = useModal();
    const [email,setEmail] = useState<string>("")
    const [id,setID] = useState<number|string>('')
    const [downloadingFileLoading, setDownloadFileLoading] = useState<boolean>(false)
    const [fileDownloadeRsponse,setFileDownloadResponse] = useState<string>("")
    const [fileDownloadeErrorRsponse,setFileDownloadErroResponse] = useState<string>("")
   

    useEffect(() => {
        fetchFileList()
    }, [])
    const fetchFileList = () => {
        setIsLoading(true)
        const response = axios.post(apiUrlEndPoint.fetchFileDetailsApi(), {
            "config": {
                "is_": "get_list"
            }
        })
        response.then((res) => {
            console.log(res.data.files_list);
            setFilesList(res.data.files_list)
            setIsLoading(false)

        })
        response.catch(err => {
            console.log(err);

        })
    }
    const fileRunHandler = (file: File) => {
        const payload = {
            "proccess_is": file.name,
            "file_id": file.id,
            "file_path": `http://165.22.29.27:8000/media/${file.files}`
        }
        setRunningFileId(file.id)
        axios.post(apiUrlEndPoint.runFile(), payload)
            .then((res) => {
                console.log(res);
                setRunningFileId('')
                fetchFileList()
            })
            .catch(error => {
                console.log(error);
                setRunningFileId('')
            })
    }

    console.log(JSON.stringify(filesList));
    const formatDate = (dateString: string) => {
        // const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined);
    };

    const downloadFile =async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("someda");
        setDownloadFileLoading(true)
        setFileDownloadErroResponse("")
        setFileDownloadResponse("")
        axios.post(`${baseUrl}/api/app/servicesapps/servicesapps_workspace/generate-excel/${id}/`,{
            "email_addresses":[email]
        })
        .then(res => {
            console.log(res);
        
            setDownloadFileLoading(true)
            setFileDownloadResponse(res?.data?.message)
        })
        .catch(error => {
            console.log(error);
            setDownloadFileLoading(true)
            setFileDownloadErroResponse("something went wrong")
        })
    }

    return (
        <React.Fragment>
            <header className="bg-white shadow">
                <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Files Processed
                    </h2>
                </div>
            </header>
            <main>

                <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {!isLoading ?
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-sm">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Leads </th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date Uploaded</th>
                                        <th scope="col">Processed Date</th>
                                        <th scope='col' style={{ textAlign: "center" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filesList.map((file, index) => (
                                        <tr key={file.id}>
                                            <td scope='row'>{index}</td>
                                            <td className='filename'>{file.name ? file.name : " - "}</td>
                                            <td>{file.leads}</td>
                                            <td className='file-status'>
                                                <p className={file.status !== "waiting" ? 'processing-status' : 'wiating-status'}>
                                                    {file.status}
                                                </p></td>
                                            <td>{formatDate(file.created_at)}</td>
                                            <td>{formatDate(file.updated_at)}</td>
                                            <td>
                                                {runningFileId === file.id ?
                                                    <button>Loading...</button> :
                                                    <button onClick={() => fileRunHandler(file)}>Run</button>}
                                                <button>View</button>
                                                <button onClick={()=>{
                                                  toggle()
                                                  setID(file.id)  
                                                } }>Export</button>
                                                <button>Kill</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* <td scope='row'>1</td>
                                <td className='filename'>somedata some more data</td>
                                <td>16/0</td>
                                <td className='file-status'>
                                    <p className='wiating-status'>waiting </p></td>
                                <td>jul, 10 2023</td>
                                <td>jul, 10 2023</td>
                                <td>
                                    <button>View</button>
                                    <button>Export</button>
                                    <button>Kill</button>
                                </td>
                                <tr />
                                <td scope='row'>1</td>
                                <td className='filename'>somedata some more data</td>
                                <td>16/0</td>
                                <td className='file-status'>
                                    <p className='processing-status'>processing </p></td>
                                <td>jul, 10 2023</td>
                                <td>jul, 10 2023</td>
                                <td>
                                    <button>View</button>
                                    <button>Export</button>
                                    <button>Kill</button>
                                </td> */}
                                    <tr />

                                </tbody>
                            </table>

                        </div> :

                        <div>
                            Loading...
                        </div>
                    }
                    <br />
                </div>
                <Modal isOpen={isOpen} toggle={toggle}>
                    {fileDownloadeRsponse.length > 0 || fileDownloadeErrorRsponse.length>0 ?<> 
                    {fileDownloadeRsponse.length>0 ? <>
                    <div style={{
                        backgroundColor:"#6ee7b7",
                        color:"#000"
                    }}
                    className='p-4 rounded-sm my-2'
                    >
                        {fileDownloadeRsponse}
                       
                    </div>
                    <button className='bg-buttonbg_color text-white px-4 py-2 text-sm rounded-sm' type='submit' onClick={toggle}>Next</button>
                     </>:<>    
                     <div className='p-4 rounded-sm my-2' style={{
                        backgroundColor:"#f87171",
                        color:"#000"}}>
                        {fileDownloadeErrorRsponse}
                       
                    </div>
                    <button className='bg-buttonbg_color text-white px-4 py-2 text-sm rounded-sm' type='submit' onClick={toggle}>Next</button></> }
                    </>  :
                    <><h3 className='text-md'>Enter the email to download</h3>
                    <form
                className='sm:mx-0  md:mx-2 py-6 px-4  bg-white rounded-md'
                    onSubmit={downloadFile}
            >
                <div className='flex flex-col mb-4'>
                    <label className='text-sm '>Email </label>
                    <input
                        type='text'
                        className='border-solid py-1 px-2 my-1 rounded-sm'
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <small className='text-[70%] text-[#74788d]'>
                        The download file will be sent to this Email.
                    </small>
                </div>
                <div className='mt-8'>
                    <button className='bg-buttonbg_color text-white px-4 py-2 text-sm rounded-sm' type='submit'>
                        {downloadingFileLoading ? "loading..." : "Submit"}
                    </button>
                </div>

                </form></>}
                </Modal>
            </main>
        </React.Fragment >
    )

};

export default Home;
