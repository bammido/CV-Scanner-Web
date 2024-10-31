import { useRef } from "react";
import Button from "../button";

export default function FileUpload({ file, handleChangeFile } : { file: null | File, handleChangeFile: (file : null | File) => void }) {
    const fileRef = useRef<null | HTMLInputElement>(null)

    async function handleChangeFileAux(event: React.ChangeEvent<HTMLInputElement>) {
        if(!event.target.files){
            return
        }

        const selectedFile = event.target.files[0];

        if(!selectedFile) {
            return
        }

        handleChangeFile(selectedFile)
    }

    return <div className="flex flex-col gap-2">
        {file?.name && <div className="flex gap-6 items-center">
                <span>Arquivo: <b>{file?.name}</b></span>
                <Button 
                    onClick={() => {
                        handleChangeFile(null);
                        if(fileRef.current?.files?.length){
                            fileRef.current.files = null
                        }
                    }}
                >
                    {/* <LetterXSvg /> */}
                    X
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
                key={file?.name}
                placeholder="subir cv"
            />
    </div>
}