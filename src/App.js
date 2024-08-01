
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./Styles/theme"
import { Login } from './Pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<Login/>} />
         </Routes>
          </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
