import Bigcard, { Smallcard, Usercard } from './Big-card.jsx'
import smallcarddata from "./Smallcard.json"
import userdata from "./user.json"
import "./index.css"
function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand ml-5">Start Bootstrap</a>
        <form className="form-inline">
          <button className="btn btn-primary my-2 my-sm-0 mr-5" type="submit">Sign Up</button>
        </form>
      </nav>
      <Bigcard content="Generate more leads with a professional landing page!" size="medium" />
      {smallcarddata.map((data) => (
        <Smallcard
          key={data.No}
          {...data}
        />
      ))}
      <h2 style={{ textAlign: "center", marginTop: 50 }}>What people are saying...</h2>
      {userdata.map((data1) => (
        <Usercard
          key={data1.no}
          {...data1}
        />
      ))}
      <Bigcard content="Ready to get started? Sign up now!" size="small" />
      <div>
        <ul className="nav mt-5 ml-5">
          <li className="nav-item">
            <a className="nav-link active" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Term of use</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">privacy policy<br /></a>
          </li>
          <div style={{ marginLeft: "50%" }}>
            <button className='buttonicon' ><i className="fa-brands fa-facebook icon"></i></button>
            <button className='buttonicon'><i className="fa-brands fa-twitter icon"></i></button>
            <button className='buttonicon'><i className="fa-brands fa-instagram icon"></i></button>
          </div>
        </ul>
        <p className="ml-5">© Your Website 2023. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default App
