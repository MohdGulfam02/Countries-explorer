export default function Header({theme}) {
  const [isDark, setIsDark] = theme;

  // isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');

  return (
    <header className={`header-container ${isDark ? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          setIsDark(!isDark);
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`theme-icon fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i> &nbsp;
          <span className="theme-text">{isDark ? 'Light' : 'Dark'} Mode</span>
        </p>
      </div>
    </header>
  );
}
