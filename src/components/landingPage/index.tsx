import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <h1>Landig Page</h1>

      <Link to={"/Login"}>
        <button>LogIn</button>
      </Link>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
      <Link to={"/askus"}>
        <button>AskUs</button>
      </Link>
    </div>
  )
}

export default LandingPage
