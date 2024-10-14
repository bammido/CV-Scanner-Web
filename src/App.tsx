import Description from "./components/description"
import ThemeToogleButton from "./components/themeToogle"
import Title from "./components/title"
import { GlobalContextProvider } from "./contexts/globalContext"

function App() {
  return (
    <GlobalContextProvider>
      <Title>Quer um currículo que se destaque?</Title>
      <Description>Faça o teste agora e receba um feedback completo.</Description>
      <ThemeToogleButton />
    </GlobalContextProvider>
  )
}

export default App
