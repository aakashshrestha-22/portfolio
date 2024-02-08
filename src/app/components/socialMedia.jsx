import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import InstaIcon from "../../../public/instagram.svg";

export default function SocialMedia() {
  return (
    <>
      {" "}
      <div className="socials flex items-center flex-row gap-2 ">
        <Link href="https://github.com/aakashshrestha-22">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://linkedin.com/in/aakash-shrestha22/">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link href="https://www.instagram.com/_aakash_shrestha/">
          <Image src={InstaIcon} alt="insta icon" className=" h-9 w-9" />
        </Link>
      </div>
    </>
  );
}
