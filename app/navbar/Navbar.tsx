import Image from "next/image";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="ml-auto mr-auto border-solid border-2 border-amber-100">
      <nav className="flex items-center">
        <div className="float-left">
          <Image
            // can ommit public due to next js default config
            src="images/logo.svg"
            alt={"logo"}
            width={50}
            height={50}
            className="mr-4"
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-end w-3/4 float-right">
          <div>Font Drop Down</div>
          <div>Dark Mode Switch</div>
          <div>Dark/Light Mode Icon</div>
        </div>
      </nav>
    </header>
  );
};
export { Navbar };
