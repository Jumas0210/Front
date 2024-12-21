/* eslint-disable react/prop-types */
import { MyModal } from "./MyModal";

export function Header() {
    return (
      <header className="top-bar">
        <p className="top-bar-text">
            OShoes
        </p>
        <MyModal/>
      </header>
    );
  }
  