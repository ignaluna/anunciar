const Header = ({ onToggleMenu }) => {
  return (
    <header className="bg-white">
      {/* ...contenido del header */}
      <div className="flex items-center gap-6">
        <button
          className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
          onClick={onToggleMenu}
        >
          Sign in
        </button>
        <ion-icon
          onClick={() => onToggleMenu()}
          name="menu"
          className="text-3xl cursor-pointer md:hidden"
        ></ion-icon>
      </div>
    </header>
  );
};

export default Header;
