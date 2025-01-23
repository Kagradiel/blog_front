import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import MenuMobile from "./menumobile/MenuMobile";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/login");
  }

  return (
    <>
      <div
        className="w-[50px] sm:w-1/3 sm:h-[45px] bg-black bg-opacity-40 
        sm:bg-opacity-30 text-zinc-900 sm:text-white flex justify-center 
        items-center py-4 backdrop-blur-lg rounded-[90px] sm:rounded-[10px] 
        fixed z-10 top-0 left-1/2 transform -translate-x-1/2 sm:pl-[20px] 
        sm:pr-[20px] mt-[3dvh]"
      >
        <div className="container justify-between text-lg hidden sm:flex">
          <Link to="/home" className="text-lg font-light">
            Blog Pessoal
          </Link>

          <div className="flex gap-4 text-base font-light items-center">

            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>

            <Link to="/temas" className="hover:underline">
              Temas
            </Link>

            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar tema
            </Link>

            Perfil

            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
            
          </div>
        </div>

        <div className="sm:hidden">
            <MenuMobile />
        </div>
      </div>
    </>
  );
}

export default Navbar;
