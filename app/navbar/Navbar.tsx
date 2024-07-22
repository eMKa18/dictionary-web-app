import Image from "next/image";
const Navbar = () => {
  return (
    <header>
      <nav>
        <Image
          // can ommit public due to next js default config
          src="images/logo.svg"
          alt={"logo"}
          width={50}
          height={50}
        ></Image>
      </nav>
    </header>
  );
};
export { Navbar };
