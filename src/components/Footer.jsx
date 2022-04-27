import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer class="bg-slate-800  p-2  footer text-center">
      <span class="text-sm text-white sm:text-center">
        © 2022{" "}
        <a href="www.movierental.com" class="hover:underline">
          movie rental
        </a>
        . All Rights Reserved.
      </span>
      <ul class="space-x-10 text-white">
        <Link to="movie" className="text-sm text-white">
          About
        </Link>
        <Link to="movie" className="text-sm text-white">
          Contact
        </Link>
        <Link to="movie" className="text-sm text-white">
          Address
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
