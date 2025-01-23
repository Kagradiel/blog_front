import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex  flex-col justify-between bg-black text-white p-[22px] lg:flex-row">
        <div className="flex flex-col  py-4">
          <p className=" font-bold text-1xl lg:text-xl">
            Blog Pessoal | Copyright: {data}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-4 lg:flex-row">
          <p className="text-lg">Acesse nossas redes sociais: </p>
          <div className="flex gap-2">
            <LinkedinLogo size={36} weight="bold" />
            <InstagramLogo size={36} weight="bold" />
            <FacebookLogo size={36} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
