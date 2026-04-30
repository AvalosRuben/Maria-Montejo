function TopBar() {
  return (
    <div className="w-full h-20 flex items-center bg-background opacity-80 fixed top-0 left-0 backdrop-blur-md z-1">
      <img
        src="logo.jpg"
        alt="Maria y Montejo logo"
        className="w-10 h-10 ml-10"
      />
      <div className="flex gap-5 mr-10 ml-auto">
        <button className="hover:bg-gray-200 p-2 rounded-lg">
          Coffee Shop
        </button>
        <button className="hover:bg-gray-200 p-2 rounded-lg">
          Casa Boutique
        </button>
      </div>
    </div>
  );
}

export default TopBar;
