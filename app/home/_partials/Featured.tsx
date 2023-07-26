import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Icons
import { FaMagnifyingGlass } from "react-icons/fa6";

// Import Styles
import "./Featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="title">Sizin için en iyi freelance hizmeti bulun</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Herhangi bir hizmeti arayın..."
              className="search-input"
            />
            <button className="search-btn">
              <FaMagnifyingGlass
                size={16}
                color={"#fff"}
              />
            </button>
          </div>

          <div className="popular">
            <span>Popular:</span>
            <Link
              href="/"
              className="link"
            >
              Website Dizayn
            </Link>
            <Link
              href="/"
              className="link"
            >
              WordPress
            </Link>
            <Link
              href="/"
              className="link"
            >
              Logo Dizayn
            </Link>
            <Link
              href="/"
              className="link"
            >
              AI Hizmetleri
            </Link>
          </div>
        </div>
        <div className="right">
          <Image src={"/images/person.png"} width={500} height={500} alt="featured"/>
        </div>
      </div>
    </div>
  );
}
