import Button from "./components/button"
import Description from "./components/description"
import ThemeToogleButton from "./components/themeToogle"
import Title from "./components/title"
import { GlobalContextProvider } from "./contexts/globalContext"

function App() {
  return (
    <GlobalContextProvider>
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
      </div>
    </GlobalContextProvider>
  )
}

export default App
