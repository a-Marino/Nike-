import { Button } from './Button';

export const Main = function () {
  return (
    <main className="flex flex-col mb-5">
      <div className=" h-[70px] bg-gray-100 flex flex-col items-center justify-center text-sm">
        <p>Hasta 6 cuotas sin interes con bancos seleccionados</p>
        <p className="underline">Ver promociones bancarias</p>
      </div>
      <div className="px-6 flex flex-col items-center gap-10">
        <img
          src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/b43db17c-499f-4fe6-90d6-4aafa25a1a5d___540dbd0538d9b2dd291e0974ccff0e1e.jpg"
          alt="Nike Tech"
        />
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-black text-6xl">TECH FLEECE</h2>
          <Button>Ver Colecciones</Button>
        </div>
        <img
          src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/1c8ccd0c-f11a-4720-81cd-9ea573dbadd0___ba86d6ef6e969dc9207bae025ea1f9a0.jpg"
          alt="Max Control"
        />
      </div>
    </main>
  );
};
