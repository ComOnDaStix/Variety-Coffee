import styles from "../styles/Locations.module.css";
import Image from "next/image";
import Link from "next/link";

const Locations = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <p className={styles.p}>OUR LOCATIONS</p>
            <h2 className={styles.h2}>
              We opened our doors in Williamsburg in 2008. Since then, we’ve
              built six locations in the NYC communities we call home.
            </h2>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.leftSide}>
            <div className={styles.imgContainer}>
              <Link
                className={styles.link}
                href={
                  "https://www.google.com/maps/place/Variety+Coffee+Roasters/@40.7120166,-73.9599226,15z/data=!4m6!3m5!1s0x89c259512ef5b6c1:0x86b467f7d2ae75e3!8m2!3d40.7154212!4d-73.9443309!16s%2Fg%2F11xy8z22v"
                }
              >
                <div className={styles.locationSticker}>
                  <p className={styles.locationTitle}>WILLIAMSBURN</p>
                  <div className={styles.locationAddress}>
                    <p>368 Graham Avenue Brooklyn, NY 11211</p>
                    <p>347-599-2351</p>
                  </div>
                </div>

                <Image
                  src={"/sectionimg3.webp"}
                  width={510}
                  height={574}
                  className={styles.imgLeft}
                  alt="sectionimg3"
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Link
                href={
                  "https://www.google.com/maps/place/Variety+Coffee+Roasters/@40.7073373,-74.0196853,13z/data=!4m6!3m5!1s0x89c258bcefd9db3d:0x6f5aa1bf6489d409!8m2!3d40.7788574!4d-73.9558565!15sCg52YXJpZXR5IGNvZmZlZSIDiAEBWhAiDnZhcmlldHkgY29mZmVlkgELY29mZmVlX3Nob3A?shorturl=1"
                }
                className={styles.link}
              >
                <div className={styles.locationSticker3}>
                  <p className={styles.locationTitle}>UPPER EAST SIDE</p>
                  <div className={styles.locationAddress}>
                    <p>1269 Lexington Ave New York, NY 10028</p>
                    <p>212-289-2104</p>
                  </div>
                </div>

                <Image
                  src={"/location4.webp"}
                  width={550}
                  height={820}
                  className={styles.imgLeft}
                  alt="location4"
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Link
                href={
                  "https://www.google.com/maps/place/Variety+Coffee+Roasters/@40.7073373,-74.0196853,13z/data=!4m6!3m5!1s0x89c259a533a7d2e3:0x37d08e1c0464b202!8m2!3d40.745199!4d-73.9945617!16s%2Fg%2F11c6cd32m5"
                }
                className={styles.link}
              >
                <div className={styles.locationSticker2}>
                  <p className={styles.locationTitle}>CHELSEA</p>
                  <div className={styles.locationAddress}>
                    <p>261 Seventh Avenue New York, NY 10001</p>
                    <p>917-409-0106</p>
                  </div>
                </div>
                <Image
                  src={"/location5.webp"}
                  width={545}
                  height={362}
                  className={styles.imgLeft}
                  alt="locations5"
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Link
                className={styles.link}
                href={
                  "https://www.google.com/maps/place/140+Nassau+St,+New+York,+NY+10038/data=!4m2!3m1!1s0x89c25a227e1e42f7:0x5c9cdcec79ed422c?sa=X&ved=2ahUKEwiXo9O1tJv2AhU0jYkEHTiqCn0Q8gF6BAgXEAE"
                }
              >
                <div className={styles.locationSticker}>
                  <p className={styles.locationTitle}>BROOKLYN BRIDGE</p>
                  <div className={styles.locationAddress}>
                    <p>140 Nassau st NEW YORK NY 10038</p>
                    <p>212-267-0207</p>
                  </div>
                </div>
                <Image
                  src={"/location2.webp"}
                  width={550}
                  height={571}
                  className={styles.imgLeft}
                  alt="location2"
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Link
                className={styles.link}
                href={
                  "https://www.google.com/maps/place/340+Stagg+St,+Brooklyn,+NY+11206/@40.7103399,-73.9349112,17z/data=!4m5!3m4!1s0x89c25eaac72ba1b5:0xac8af46272df6d20!8m2!3d40.7101654!4d-73.9349276?shorturl=1"
                }
              >
                <div className={styles.locationSticker5}>
                  <p className={styles.locationTitle}>ROASTERY</p>
                  <div className={styles.locationAddress}>
                    <p>340 Stagg St Brooklyn, NY 11206</p>
                    <p>718-418-2326</p>
                  </div>
                </div>
                <Image
                  src={"/location6.webp"}
                  width={550}
                  height={365}
                  className={styles.image5}
                  alt="location6"
                />
              </Link>
            </div>
          </div>
          <div className={styles.RightSide}>
            <div className={styles.imgContainer}>
              <Link
                className={styles.link}
                href={
                  "https://www.google.com/maps/place/146+Wyckoff+Ave,+Brooklyn,+NY+11237/@40.7027417,-73.9192796,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25c1e948969a5:0xb1c263efd06b3b56!8m2!3d40.7027377!4d-73.9170856!15sCjExNDYgV3lja29mZiBBdmVudWUgQnJvb2tseW4sIE5ZIDExMjMgNzE4LTQ5Ny0yMzI2kgERY29tcG91bmRfYnVpbGRpbmc?shorturl=1"
                }
              >
                <div className={styles.locationSticker6}>
                  <p className={styles.locationTitle}>BUSHWICK</p>
                  <div className={styles.locationAddress}>
                    <p>146 Wyckoff Avenue Brooklyn, NY 11237</p>
                    <p>718-497-2326</p>
                  </div>
                </div>
                <Image
                  src={"/location7.webp"}
                  width={550}
                  height={736}
                  className={styles.imgRight}
                  alt="location7"
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Link
                className={styles.link}
                href={
                  "https://www.google.com/maps/place/Variety+Coffee+Roasters/@40.7073373,-74.0196853,13z/data=!4m6!3m5!1s0x89c259512eb5ddbb:0xb4a1c36dea141f0b!8m2!3d40.7232001!4d-73.9442622!15sCg52YXJpZXR5IGNvZmZlZSIDiAEBWhAiDnZhcmlldHkgY29mZmVlkgELY29mZmVlX3Nob3A?shorturl=1"
                }
              >
                <div className={styles.locationSticker7}>
                  <p className={styles.locationTitle}>GREENPOINT</p>
                  <div className={styles.locationAddress}>
                    <p>142 Driggs Avenue Brooklyn, NY 11222</p>
                    <p>718-497-2326</p>
                  </div>
                </div>
                <Image
                  src={"/location8.webp"}
                  width={545}
                  height={695}
                  className={styles.imgRight}
                  alt="location8"
                />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Link
                className={styles.link}
                href={
                  "https://www.google.com/maps/place/Variety+Coffee/@40.6676888,-73.9811894,15z/data=!4m2!3m1!1s0x0:0xb819672ccd783153?sa=X&ved=2ahUKEwjLiZD93ID7AhVfLVkFHXaJDDEQ_BJ6BAhoEAU"
                }
              >
                <div className={styles.locationSticker8}>
                  <p className={styles.locationTitle}>PARK SLOPE</p>
                  <div className={styles.locationAddress}>
                    <p>312 7th Avenue Brooklyn, NY 11215</p>
                    <p>718-788-1891</p>
                  </div>
                </div>
                <Image
                  src={"/location9.webp"}
                  width={550}
                  height={365}
                  className={styles.imgRight}
                  alt="location9"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
