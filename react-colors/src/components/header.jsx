const Header = () => {
  return (
    <>
      <h1>
        The Great
        <br />
        <span id="colorDisplay">RGB</span>
        <br />
        Color Game
      </h1>

      <div id="stripe">
        <button id="reset">New Colors</button>
        <span id="message"></span>
        <button id="easyBtn" className="mode">
          Easy
        </button>
        <button id="hardBtn" className="mode">
          Hard
        </button>
      </div>
    </>
  );
};

export default Header;
