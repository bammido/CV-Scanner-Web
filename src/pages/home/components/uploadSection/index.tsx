import Description from "../../../../components/description";
import FileUpload from "../../../../components/fileUpload";
import Highlight from "../../../../components/highlight";
import Title from "../../../../components/title";
import { cvScannerApi } from "../../../../service/api/cvScannerApi";

export default function UploadSection() {
    async function handleChangeFile(file : null | File) {
        if(!file) {
          return
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        await cvScannerApi.post('api/cvResume', formData)
    }

    return <div className="flex flex-col gap-2">
    <Title>Quer um currículo que se <Highlight>destaque</Highlight>?</Title>
    <Description>Faça o teste agora e receba um feedback completo.</Description>
    <div className="self-center">
      <FileUpload 
        resetAfterChange={true}
        file={null}
        handleChangeFile={handleChangeFile}
      />
    </div>
  </div>
}