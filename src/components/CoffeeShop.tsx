function CoffeeShop() {
  return (
    <>
      <div className="bg-[url(/mariaymontejohero.jpg)] w-screen h-screen bg-accent flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-9xl font-serif text-background">
            Maria & Montejo
          </h1>
          <p className="text-4xl text-background font-serif">Próximamente...</p>
        </div>
        {/*texto papu pro*/}
      </div>
      <div className="w-screen h-screen flex items-center justify-center gap-50">
        <div className="w-3xl h-full flex flex-col items-center justify-center gap-8 text-wrap">
          <h2 className="font-serif text-6xl text-left">
            Un espacio donde el tiempo se detiene
          </h2>
          <p className="text-left text-xl font-extralight text-muted-foreground">
            En el corazón de Mérida, María & Montejo nace como un refugio de
            calma y autenticidad. Nuestro espacio combina la arquitectura
            tradicional yucateca con una estética contemporánea y minimalista.
          </p>
          <p className="text-left text-xl font-extralight text-muted-foreground">
            Cada taza es una invitación a desacelerar, a conectar con el momento
            presente y a disfrutar de un café preparado con dedicación.
          </p>
        </div>
        <div className="w-xl">
          <img
            src="src/assets/mariaymontejointerior.png"
            alt="Interior Maria y Montejo"
            className=""
          />
        </div>
      </div>
    </>
  );
}
export default CoffeeShop;
