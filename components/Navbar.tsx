import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import { AuthProviders } from ".";


const Navbar: React.FC = () => {
    const session = null

    return(
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image 
                        src="/logo.svg"
                        alt="app logo"
                        width={115}
                        height={43}
                        className="object-contain"
                    />
                </Link>
                <ul className="xl:flex hidden text-sm gap-7">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="link_hover"
                        >
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserPhoto
                        <Link
                            href="/create-project"
                        >
                            Share Work
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    )
}

export default Navbar;