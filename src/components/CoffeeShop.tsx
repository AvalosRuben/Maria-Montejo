function CoffeeShop() {
  return (
    <>
      <div className="bg-[url(/mariaymontejohero.jpg)] bg-cover bg-center w-full min-h-screen bg-accent flex flex-col justify-center items-center mb-15 ">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif text-background">
            Maria & Montejo
          </h1>
          <p className="text-2xl md:text-4xl text-background font-serif">
            Próximamente...
          </p>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col lg:flex-row  items-center justify-center gap-12 p-6 md:p-12 max-w-7xl mx-auto border-b border-border ">
        <div className="w-full lg:max-w-3xl flex flex-col items-center justify-center gap-6 md:gap-8">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-center md:text-left w-full">
            Un espacio donde el tiempo se detiene
          </h2>
          <p className="text-center lg:text-left text-lg md:text-xl font-extralight text-muted-foreground">
            En el corazón de Mérida, María & Montejo nace como un refugio de
            calma y autenticidad. Nuestro espacio combina la arquitectura
            tradicional yucateca con una estética contemporánea y minimalista.
          </p>
          <p className="text-center lg:text-left text-lg md:text-xl font-extralight text-muted-foreground">
            Cada taza es una invitación a desacelerar, a conectar con el momento
            presente y a disfrutar de un café preparado con dedicación.
          </p>
        </div>
        <div className="w-full lg:max-w-xl flex justify-center items-center">
          <img
            src="/mariaymontejointerior.png"
            alt="Interior Maria y Montejo"
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center  gap-10 w-full my-30">
        <h2 className="font-serif text-4xl md:text-6xl ">
          Nuestra experiencia
        </h2>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-2 items-center p-10 w-full">
          <div className="flex flex-col items-center gap-4 max-w-lg">
            <h3 className="font-serif text-center text-xl md:text-3xl ">
              Café de especialidad
            </h3>
            <p className="font-extralight text-muted-foreground text-center text-sm md:text-base">
              Granos cuidadosamente seleccionados, tostados artesanalmente y
              preparados con métodos que resaltan su perfil único.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-lg ml-auto mr-auto gap-4">
            <h3 className="font-serif text-center text-xl md:text-3xl">
              Arquitectura Consciente
            </h3>
            <p className="font-extralight text-muted-foreground text-center text-sm md:text-base">
              Espacios diseñados para el descanso visual y mental, donde cada
              detalle invita a la contemplación.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-lg gap-4">
            <h3 className="font-serif text-center text-xl md:text-3xl">
              Comunidad Local
            </h3>
            <p className="font-extralight text-muted-foreground text-center text-sm md:text-base">
              Un punto de encuentro para creadores, pensadores y quienes buscan
              momentos de quietud en la ciudad.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-extra/30 w-full flex flex-col items-center py-15 gap-6">
        <p className="font-extralight text-muted-foreground text-sm md:text-xl">
          UBICACIÓN
        </p>
        <p className="font-serif text-xl md:text-3xl">
          C.58, entre 37 y 39, Centro
        </p>
        <p className="font-extralight text-muted-foreground text-sm md:text-xl">
          Mérida, Yucatán
        </p>
      </div>
    </>
  );
}
export default CoffeeShop;
