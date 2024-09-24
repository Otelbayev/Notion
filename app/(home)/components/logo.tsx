import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="dark:hidden"
      />
      <Image
        src={"/logo-dark.svg"}
        alt="logo"
        width={50}
        height={50}
        className="hidden dark:block"
      />
      <p className="text-xl font-semibold">Notion</p>
    </div>
  );
};

export default Logo;
