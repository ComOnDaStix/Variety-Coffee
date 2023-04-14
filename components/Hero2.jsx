import Image from "next/image";

const Hero2 = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>
      <Image
        src="/heroimg4.webp"
        layout="responsive"
        width={1900}
        height={420}
        objectFit="cover"
      />
    </div>
  );
};

export default Hero2;
