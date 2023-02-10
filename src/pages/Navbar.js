import {Link} from 'react-router-dom'
function Navbar(props){
        return (
                <nav id="" className="navbar navbar-expand-lg bg-body-tertiary bg-dark position-fixed top-0 start-0 w-100 ">
                        <div className="container-fluid ">
                                <Link className="navbar-brandd fs-3 mx-3 fw-bold" onClick={()=>{props.setactivenav('')}} to="/NewsMonkey">NewsMonkey</Link>
                                <button className="navbar-toggler text-light" onClick={()=>{props.setnavbutton(!props.navbutton)}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" id={props.navbutton?'navbutton-active':''}></i></span>
                                
                                </button>
                                <div className="collapse navbar-collapse " id="navbarNav">
                                        <div className="navbar-nav">
                                                <Link className="nav-link" id={(props.activenav==='')?'nav-link-active':''} onClick={()=>{props.setactivenav('')}} aria-current="page" to="/NewsMonkey">Home</Link>
                                                <Link className="nav-link" id={(props.activenav==='entertainment')?'nav-link-active':''} onClick={()=>{props.setactivenav('entertainment')}} to="/NewsMonkey/entertainment">Entertainment</Link>
                                                <Link className="nav-link" id={(props.activenav==='health')?'nav-link-active':''} onClick={()=>{props.setactivenav('health')}} to="/NewsMonkey/health">Health</Link>
                                                <Link className="nav-link" id={(props.activenav==='sports')?'nav-link-active':''} onClick={()=>{props.setactivenav('sports')}} to="/NewsMonkey/sports">Sports</Link>
                                                <Link className="nav-link" id={(props.activenav==='science')?'nav-link-active':''} onClick={()=>{props.setactivenav('science')}} to="/NewsMonkey/science">Sciences</Link>
                                                <Link className="nav-link" id={(props.activenav==='technology')?'nav-link-active':''} onClick={()=>{props.setactivenav('technology')}} to="/NewsMonkey/technology">Technology</Link>
                                                <Link className="nav-link" id={(props.activenav==='business')?'nav-link-active':''} onClick={()=>{props.setactivenav('business')}} to="/NewsMonkey/business">Business</Link>
                                        </div>
                                </div>
                        </div>
                </nav>
        )
}
export default Navbar;