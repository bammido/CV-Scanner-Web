import { useState } from "react"
import Button from "./components/button"
import Description from "./components/description"
import FileUpload from "./components/fileUpload"
import ThemeToogleButton from "./components/themeToogle"
import Title from "./components/title"
import { GlobalContextProvider } from "./contexts/globalContext"
import { cvScannerApi } from "./service/api/cvScannerApi"
import { LoginContextProvider } from "./contexts/LoginContext"
import LoginGoogle from "./components/loginGoogle"

function App() {
  const [file, setFile] = useState<null | File>(null)

  async function handleSubmit() {
    if(!file) {
      return
    }

    const formData = new FormData();
    formData.append('file', file);

    await cvScannerApi.post('api/cvResume', formData)
  }

  return (
    <GlobalContextProvider>
      <LoginContextProvider>
        <div className="pt-20">
          <div className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600 py-2 px-4 flex gap-2 justify-end">
            <ThemeToogleButton />
            <Button 
              variant="outlined-purple"
              text="Log in"
            />
            <Button 
              variant="solid-purple"
              text="Sign in"
            />
          </div>
          <Title>Quer um currículo que se destaque?</Title>
          <Description>Faça o teste agora e receba um feedback completo.</Description>

          <FileUpload 
            file={file}
            handleChangeFile={(newFile : null | File) => setFile(newFile)}
          />

          <div className="self-end">
              <Button
                  disabled={!file}
                  text="salvar"
                  onClick={handleSubmit}
              />
          </div>
        </div>

        <LoginGoogle />

      </LoginContextProvider>
    </GlobalContextProvider>
  )
}

export default App
