import { JordanLogo, NikeLogo } from '../assets/Icons';

export const Nav = function () {
  return (
    <header className="flex flex-col sticky top-0">
      <div className="h-10 bg-gray-100 flex px-6 items-center justify-between">
        <JordanLogo className="h-6" />
        <ul className="flex text-xs font-semibold [&>li]:px-4">
          <li>
            <a href="#">Subscribite</a>
          </li>
          <li className=" border-x border-black">
            <a href="#">Buscar tienda</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
        </ul>
      </div>
      <nav className=" h-[60px] flex items-center px-6 justify-between bg-white">
        <NikeLogo className=" h-7" />
        <ul className="gap-5 flex ml-24">
          <li>
            <a href="#">Destacados</a>
          </li>
          <li>
            <a href="#">Hombre</a>
          </li>
          <li>
            <a href="#">Mujer</a>
          </li>
          <li>
            <a href="#">Niño/a</a>
          </li>
          <li>
            <a href="#">Accesorios</a>
          </li>
          <li>
            <a href="#">Oportunidades</a>
          </li>
        </ul>
        <div className="flex items-center justify-around">
          <input
            type="text"
            name="Buscar"
            id="search"
            placeholder="Buscar"
            className="background bg-gray-100 rounded-full py-[10px] px-6 w-[70%]"
          />
          <img src="https://nikearprod.vteximg.com.br/arquivos/search.svg" alt="" className="w-7" />
        </div>
      </nav>
    </header>
  );
};
