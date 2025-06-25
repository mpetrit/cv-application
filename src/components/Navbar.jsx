import "../styles/Navbar.css";

const Navbar = ({ colorHeader, setColorHeader, colorTitle, setColorTitle }) => {
  return (
    <nav style={{ backgroundColor: colorHeader }}>
      <h1 style={{ color: colorTitle }}>CV Application</h1>
      <div className="edit-colors">
        <div className="option-holder">
          <label htmlFor="changeBackground" style={{ color: colorTitle }}>
            Change the background
          </label>
          <input
            type="color"
            value={colorHeader}
            id="changeBackground"
            onInput={(e) => setColorHeader(e.target.value)}
          />
        </div>
        <div className="option-holder">
          <label htmlFor="changeBackground" style={{ color: colorTitle }}>
            Change the color of the text
          </label>
          <input
            type="color"
            value={colorTitle}
            onInput={(e) => setColorTitle(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
