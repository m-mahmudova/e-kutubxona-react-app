interface ThemeToggleProps {
  darkMode: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggle }) => (
  <i
    className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} dark-icon`}
    onClick={toggle}
  ></i>
);

export default ThemeToggle;
