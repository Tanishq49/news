import "./navbar.css";
import {Link} from "react-router-dom";

function navbar(){
    return(
        <>
            <nav>
                <Link to="/" className="mainName">NewsMonkey</Link>
                <Link to="/about" className="navContentsLeft">About</Link>
                <Link to="/join" className="navContents">Join Us</Link>
                <Link to="/api" className="navContents">Api</Link>
                <Link to="/donate" className="navContents">Donate</Link>
                <Link to="/country" className="navContents cmp" category="null">Country Headlines</Link>
                <Link to="/sports" className="navContents cmp" category="sports">Sports</Link>
                <Link to="/technology" className="navContents cmp" category="technology">Technology</Link>
                <Link to="/science" className="navContents cmp" category="science">Science</Link>
                <Link to="/health" className="navContents cmp" category="health">Health</Link>
            </nav>
        </>
    );
}

export default navbar;