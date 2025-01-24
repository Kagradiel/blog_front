import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { MutatingDots } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="fundoLogin">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold fundo-mascara"
        >
          <form
            className="flex justify-center items-center flex-col w-1/2 gap-4 entrada-baixo-cima"
            onSubmit={login}
          >
            <h2 className="text-zinc-900 text-5xl font-light">Entrar</h2>
            <div className="relative flex flex-col w-full">
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 
              bg-transparent placeholder-transparent focus:outline-none focus:border-zinc-950 focus:text-zinc-800"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              <label
                className="absolute left-0 -top-3.5 text-zinc-500 text-sm 
            transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 
            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-950 
            peer-focus:text-sm"
                htmlFor="usuario"
              >
                Usuário
              </label>
            </div>
            <div className="relative flex flex-col w-full">
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 
              bg-transparent placeholder-transparent focus:outline-none focus:border-zinc-950 focus:text-gray-800"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              <label
                className="absolute left-0 -top-3.5 text-zinc-500 text-sm 
            transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 
            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-950 
            peer-focus:text-sm"
                htmlFor="senha"
              >
                Senha
              </label>
            </div>
            <button type="submit" className="button">
              {isLoading ? (
                <div className="flex justify-center w-full pt-28">
                  <MutatingDots color="#000000" secondaryColor="#5a5a5a" />
                </div>
              ) : (
                <span>Entrar</span>
              )}
            </button>

            <hr className="border-zinc-800 w-full" />

            <p className="text-zinc-950">
              Ainda não tem uma conta?{" "}
              <Link to="/cadastro" className="text-zinc-500 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>

          <div className="entrada-baixo-cima text-w text-7xl font-light hidden lg:block">
            <p>
              Blog <span className="entrada-lateral">Pessoal</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
