import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

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
        className="w-full sm:w-1/3 bg-black bg-opacity-30 text-white flex justify-center py-4 
            backdrop-blur-lg rounded-[20px] fixed top-0 left-1/2 transform -translate-x-1/2 pl-[20px] pr-[20px] mt-[10px]"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-lg font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4 text-base">

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
      </div>
    </>
  );
}

export default Navbar;
