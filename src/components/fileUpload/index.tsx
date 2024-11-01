import { useRef, useState } from "react";
import Button from "../button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FileUpload({ file, handleChangeFile, resetAfterChange } : { file: null | File, handleChangeFile: (file : null | File, fileRef: React.MutableRefObject< HTMLInputElement | null>) => void, resetAfterChange?: boolean }) {
    const [fileAux, setFileAux] = useState<File | null>(null)
    const fileRef = useRef<null | HTMLInputElement>(null)

    async function handleChangeFileAux(event: React.ChangeEvent<HTMLInputElement>) {
        if(!event.target.files){
            return
        }

        const selectedFile = event.target.files[0];

        if(!selectedFile) {
            return
        }

        setFileAux(selectedFile)

        await handleChangeFile(selectedFile, fileRef)

        if(resetAfterChange && fileRef?.current?.files?.length){
            console.log('teste')
            setFileAux(null)
            fileRef.current.files = null
        }
    }

    return <div className="flex flex-col gap-2 border-2 border-purple-700 p-2">
        {!resetAfterChange && file?.name || fileAux?.name && <div className="flex gap-6 items-center">
                <span>Arquivo: <b>{file?.name}</b></span>
                <Button 
                    onClick={() => {
                        if(fileRef.current?.files?.length){
                            fileRef.current.files = null
                        }
                        handleChangeFile(null, fileRef);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </div>}

            <small className="text-danger font-bold">Extensões aceitas: .pdf</small>

            <Button 
                onClick={() => fileRef?.current?.click()}
                variant="solid-purple"
                text="subir cv"
            />

            <input 
                type="file" 
                accept=".pdf," 
                className="hidden"
                onChange={handleChangeFileAux}
                ref={fileRef}
                key={file?.name || fileAux?.name}
                placeholder="subir cv"
            />
    </div>
}