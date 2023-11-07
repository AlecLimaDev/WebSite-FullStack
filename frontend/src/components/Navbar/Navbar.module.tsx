import S from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={S.header}>
        <div className={S.user}>
          <h3>Menu</h3>
        </div>

        <nav className={S.navbar}>
          <a>Home</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
