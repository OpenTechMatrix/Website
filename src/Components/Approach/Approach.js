import "./Approach.css"
import Ideate from "../../Assets/images/Ideate.png";
import Design from "../../Assets/images/Design.png";
import Develop from "../../Assets/images/Develop.png";
import Deploy from "../../Assets/images/Deploy.png";
// import Line from "../../Assets/images/Line.png";
// import casestudylines from "../../Assets/images/casestudylines.png";


function Approach() {
    return (
        <section className="approach">
            <div className="wrapper">
                <div className='three-column'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h3>our approach</h3>
                <p>We follow an agile approach with continuous feedback control</p>
                <ul>
                    <li>
                        <div>
                            <figure> <img src={Ideate} alt="Unable to load"/></figure>
                            <h4>Ideate</h4>
                            <p className="ideate-content">Turn your idea from concept to MVP</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <figure> <img src={Design} alt="Unable to load"/></figure>
                            <h4>Design</h4>
                            <p className="design-content">Sketch out the product to align the user needs</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <figure> <img src={Develop} alt="Unable to load"/></figure>
                            <h4>Develop</h4>
                            <p className="develop-content">Convert the designs into a live application</p>
                        </div>
                    </li>
                    <li>
                        <div className="deploy-content">
                            <figure> <img src={Deploy} alt="Unable to load"/></figure>
                            <h4>Deploy</h4>
                            <p >Launching the application to the market</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Approach;