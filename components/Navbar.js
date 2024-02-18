import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <p>Brainwave.io</p>
      </div>

      <div className="links">
        <ul className="main-links">
          <li>
            <Link href="/demos">Demos</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="signup-links">
          <li>
            <Link href="/sign-in">Sign in</Link>
          </li>
          <li>
            <button className="signup-btn">
              <Link href="/sign-up" className="signup-text">
                Sign up
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
