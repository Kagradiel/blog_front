import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import { AuthContext } from "./contexts/AuthContext";
import FormTema from "./components/temas/formtema/FormTema";
import DeletarTema from "./components/temas/deletartema/DeletarTema";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import FormPostagem from "./components/postagens/formpostagem/FormPostagem";
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem";
import { useContext, useEffect, useState } from "react";

interface LocationHandlerProps {
  usuario: UsuarioLogin;
  setShowNavbar: (show: boolean) => void;
}

function App() {
  const { usuario } = useContext(AuthContext);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <BrowserRouter>
      <LocationHandler usuario={usuario} setShowNavbar={setShowNavbar} />
      {showNavbar && <Navbar />}
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastrartema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastrarpostagem" element={<FormPostagem />} />
          <Route path="/editarpostagem/:id" element={<FormPostagem />} />
          <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

function LocationHandler({ usuario, setShowNavbar }: LocationHandlerProps) {
  const location = useLocation();

  useEffect(() => {

    if (
      usuario?.token &&
      usuario?.token !== "" &&
      location.pathname !== "/login"
    ) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [usuario?.token, location.pathname]);

  return null;
}

export default App;