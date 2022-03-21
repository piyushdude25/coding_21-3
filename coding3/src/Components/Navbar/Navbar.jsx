import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar" style={
        {
          width:"100%",display:"flex",gap:"12px",justifyContent:"space-evenly"
        }
        
      }>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <Link to ="/">Home</Link>
        
        <Link to="/history">History</Link>
        <Link to="/mystery">Mystery</Link>
        <Link to="/mythology">Mythology</Link>
        <Link to="/technology">Technology</Link>
      </div>
    </nav>
  );
};
