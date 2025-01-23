import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";
import FundoHome from "../../assets/images/head.png";

function Home() {
  return (
    <>
      <section className="bg-white w-full flex justify-around mt-[17dvh] sm:mt-[20dvh]">
        
        <div className="container items-center flex flex-col sm:flex-row text-black">

          <div className="flex flex-col gap-4 w-[90vw] sm:w-[50vw] items-center 
          sm:items-start justify-center py-4">

            <h2 className=" text-3xl sm:text-5xl font-thin">Seja Bem Vindo!</h2>
            <p className="text-xl font-thin text-center">Expresse aqui seus pensamentos e opiniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>

          </div>

          <div className="flex h-[400px] sm:w-[auto] sm:h-[70vh] justify-center ">
            <img
              src={FundoHome}
              alt="Imagem Página Home"
              className="w-2/3 mix-blend-multiply object-cover"
            />
          </div>


        </div>

        
      </section>



      <ListaPostagens />
    </>
  );
}

export default Home;
