import "./App.css"
import PropTypes from "prop-types";
const Bigcard = ({ content, size }) => {
    return (
        <>
            <div className="card bg-dark text-white">
                <img src="https://img.freepik.com/premium-photo/view-ocean-sea-blue-morning-relaxation-calmness-concept-copy-space_99433-6200.jpg" className="card-img" alt="image"
                    style={{ height: size == "small" ? "300px" : size == "medium" ? "450px" : "600px" }} />
                <div className="card-img-overlay text-center" style={{ marginTop: "6%" }}>
                    <div className="card-body">
                        <h1 className="card-title">{content}</h1>
                        <input type="text" name="card" id="" placeholder="Email Address" style={{ width: 400, margin: 20, padding: 10, borderRadius: 6 }} />
                        <a href="#" className="btn btn-primary">Sign In</a>
                    </div>
                </div>
            </div>
        </>
    )
}
Bigcard.propTypes = {
    content: PropTypes.string,
    size: PropTypes.string
}
const Smallcard = ({ title, image, content, position }) => {
    return (
        <>
            {position == "top" ?
                <div className="card-deck text-center" style={{ width: "18rem", display: "inline-flex", margin: "40px 10px 50px 160px" }}>
                    <div className="card" style={{ border: "none" }}>
                        <img src={image} className="card-img-top" alt="..." style={{ height: 100, width: 120, marginLeft: 75 }} />
                        <div className="card-body">
                            <h4 className="card-text">{title}</h4>
                            <p>{content}</p>
                        </div>
                    </div>
                </div> :
                position == "left" ?
                    <div className="card border-0 d-flex">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img src={image} alt="..." style={{ width: 735, height: 500 }} />
                            </div>
                            <div className="col-md-6" style={{ padding: 180 }}>
                                <div className="card-body m-0 p-0">
                                    <h4 className="card-title">{title}</h4>
                                    <p className="card-text">{content}</p>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-md-6" style={{ padding: 180 }}>
                                <h4 className="card-title">{title}</h4>
                                <p className="card-text">{content}</p>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body m-0 p-0">
                                    <img src={image} alt="..." style={{ width: 735, height: 500 }} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
Smallcard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    position: PropTypes.string
}
const Usercard = ({ name, image, content }) => {
    return (
        <>
            <div className="card border-0" style={{ width: "18rem", display: "inline-grid", margin: "40px 10px 50px 160px" }}>
                <img src={image} className="card-img-top text-center" alt="..." style={{ height: 150, width: 170, marginLeft: 75, borderRadius: "50%", border: "1px solid", padding: 5 }} />
                <div className="card-body text-center">
                    <h3 className="card-text">{name}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}
Usercard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string
}
export { Smallcard };
export default Bigcard;
export { Usercard };