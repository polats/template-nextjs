import Link from "next/link";

export default function Home() {
    return (
        <>
            <main>

            <Link
              href={"/phaser"}
              passHref
            >
              <span>Phaser</span>
            </Link>

            <br />

            <Link
              href={"/littlejs"}
              passHref
            >
              <span>LittleJS</span>
            </Link>


            </main>
        </>
    );
}
