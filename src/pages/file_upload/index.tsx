import React, { FC, useState } from 'react';
import axios from 'axios';
import { apiUrlEndPoint } from '../../api/url';

const FileUpload: FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [alias, setAlias] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedFile) {
            setError('Please select a file to upload.');
            return;
        }

        setError('');
        setSuccessMessage('');

        const formData = new FormData();
        formData.append('csv_file', selectedFile);
        formData.append('alias', alias);

        try {
            const response = await axios.post(apiUrlEndPoint.fileUploadApiEndpoint(), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setSuccessMessage('File uploaded and processed successfully!');
            } else {
                setError('Upload failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred during upload. Please try again later.');
        }
    };

    return (
        <section>
            <div className='bg-white py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='font-semibold text-lg'>Upload new file:</h1>
            </div>
            <form
                className='my-6 sm:mx-0  md:mx-12 py-6 px-4 sm:px-6 lg:px-8 bg-white rounded-md'
                onSubmit={handleFileUpload}
            >
                <div className='flex flex-col mb-4'>
                    <label className='text-sm '>File alias </label>
                    <input
                        type='text'
                        className='border-solid py-1 px-2 my-1 rounded-sm'
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        required
                    />
                    <small className='text-[70%] text-[#74788d]'>
                        This will be shown instead of the file name.
                    </small>
                </div>
                <div className='flex flex-col'>
                    <input
                        type='file'
                        name='csv_file'
                        accept='.csv'
                        className=' rounded-sm file:border file:border-none p-0 file:py-2 file:px-4 file:text-sm form-control text-sm '
                        onChange={handleFileChange}
                        required
                    />
                    <small>File</small>
                </div>
                <div className='mt-8'>
                    <button className='bg-buttonbg_color text-white px-4 py-2 text-sm rounded-sm' type='submit'>
                        Process File
                    </button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </section>
    );
};

export default FileUpload;
