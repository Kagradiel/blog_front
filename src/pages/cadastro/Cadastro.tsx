import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import "./Cadastro.css";
import { MutatingDots } from "react-loader-spinner";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold"
      >
        <div className="fundoCadastro hidden lg:block"></div>

        <form
            className="flex justify-center items-center flex-col w-1/2 gap-4 entrada-baixo-cima"
            onSubmit={cadastrarNovoUsuario}
          >

            <h2 className="text-zinc-900 text-5xl font-light">Cadastrar</h2>

            <div className="relative flex flex-col w-full">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 bg-transparent 
                placeholder-transparent focus:outline-none focus:border-zinc-950 focus:text-gray-800"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              <label
                className="absolute left-0 -top-3.5 text-zinc-500 text-sm 
            transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 
            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-950 
            peer-focus:text-sm"
                htmlFor="nome"
              >
                Nome
              </label>
            </div>
            
            <div className="relative flex flex-col w-full">
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 bg-transparent 
                placeholder-transparent focus:outline-none focus:border-zinc-950 focus:text-gray-800"
                value={usuario.usuario}
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
                Usuario
              </label>
            </div>
            
            <div className="relative flex flex-col w-full">
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 bg-transparent 
                placeholder-transparent focus:outline-none focus:border-zinc-950 focus:text-gray-800"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
              <label
                className="absolute left-0 -top-3.5 text-zinc-500 text-sm 
            transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 
            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-950 
            peer-focus:text-sm"
                htmlFor="foto"
              >
                Foto
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
                value={usuario.senha}
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
            
            <div className="relative flex flex-col w-full">
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 
              bg-transparent placeholder-transparent focus:outline-none focus:border-zinc-950 focus:text-gray-800"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
              <label
                className="absolute left-0 -top-3.5 text-zinc-500 text-sm 
            transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 
            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-950 
            peer-focus:text-sm"
                htmlFor="confirmarSenha"
              >
                Confirmar Senha
              </label>
            </div>



            <div className="flex justify-around w-full gap-8">

              <button
                className="button-cancelar rounded-lg w-1/2  py-2"
                onClick={retornar}
              >
                <span>Cancelar</span>
              </button>

              <button type="submit" className="button-cadastro w-1/2 rounded-lg py-2">
                {isLoading ? (
                  <div className="flex justify-center w-full pt-28">
                    <MutatingDots color="#000000" secondaryColor="#5a5a5a" />
                  </div>
                ) : (
                  <span>Cadastrar</span>
                )}
              </button>

            </div>
          </form>

      </div>
    </>
  );
}

export default Cadastro;
