import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "./MenuMobile.css";
import { AuthContext } from "../../../contexts/AuthContext";

const Menu = () => {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/login");
  }

  return (
    <div className="menu z-10">
      <Popup
        trigger={<div className="menu-item"><div className="menu-fundo"/></div>}
        position="bottom center"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none"}}
        arrow={false}
        className=".popup-content"
      >
        <div 
          className="menu bg-neutral-400 bg-opacity-95 text-white backdrop-blur-lg 
                 w-[90vw] left-5 sm:left-7 top-20  rounded-[15px] flex flex-col content-center 
                justify-between py-10 px-5 gap-15 h-[50dvh] text-base fixed font-extralight"
        >
          <div className="flex flex-col gap-9">
            <div className="menu-item ">
              <Link to="/home" className=" hover:underline flex gap-10">
                <span>01</span><span>Home</span>
              </Link>
            </div>

            <div className="menu-item">
              <Link to="/postagens" className="hover:underline flex gap-10">
              <span>02</span><span>Postagens</span>
              </Link>
            </div>

            <div className="menu-item ">
              <Link to="/temas" className="hover:underline flex gap-10">
              <span>03</span><span>Temas</span>
              </Link>
            </div>

            <div className="menu-item">
              <Link to="/cadastrartema" className="hover:underline flex gap-10">
              <span>04</span><span>Cadastrar tema</span>
              </Link>
            </div>

            <div className="menu-item flex gap-10">
                <span>05</span><span>Perfil</span>
            </div>
          </div>

          <div className="menu-item">
            <hr className="w-[78vw] pt-4" />
                <Link to="" onClick={logout} className="hover:underline text-xl font-semibold">
                    Sair
                </Link>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Menu;
