
import { Link } from "react-router-dom"
import CreateUserAddress from  "../components/CreateUserAddress"
import CreateCenter from "../components/CreateCenter"
export default function HomePage(){
    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/CalculateDistance">Create Calculate Distance</Link>
        </li>
        <li class="nav-item">
        <Link to="/CreateCenter">Create Center</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <h1> Home Page</h1>
       <CreateUserAddress />
       
       </div>

    )
}