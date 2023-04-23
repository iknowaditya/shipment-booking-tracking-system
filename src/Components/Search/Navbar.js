import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const login = useCallback(() => {
    navigate("/logged-in");
    console.log("clicked");
  }, [navigate]);

  return (
    <div>
      <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center cursor-pointer">
          <div className="	font-semibold text-4xl  ">
            <span>
              Ship<span className="text-violet-800">mate.</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              className="bg-violet-500 hover:bg-violet-600 text-white px-11 py-3 font-primary rounded-lg transition cursor-pointer"
              onClick={login}
              to="/logged-in"
            >
              Log in
            </Link>
            <Link className="hover:text-violet-900 transition px-9 py-3 rounded-lg cursor-pointer font-primary border-[1.8px]  border-violet-700">
              Learn More
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
