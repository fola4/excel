import { logo } from "../assets/images";

function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" className="w-28 border border-red-500" />
      <p>BadmintonExcel</p>
    </div>
  );
}

export default Logo;
