import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <Link to="/" className="item">
      Home
    </Link>
    <Link to="/about" className="item">
      about
    </Link>
  </div>
)

export default withRouter(Header)
