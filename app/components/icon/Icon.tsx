import { FaInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";

const icons = {
  ig: FaInstagram,
  linkedin: SiLinkedin,
  github: FaGithubSquare,
  gmail: SiGmail,
  done: IoCheckmarkDoneCircleSharp,
  progres: TbProgressCheck
};
interface IconProps {
  nama: string;
  color?: string;
  link?: string;
  size?: number
}

    
export default function Icon({ nama, color,link,size}: IconProps) {
  const PickedIcon = icons[nama as keyof typeof icons];
  if (!PickedIcon) {
    return null;
  }
  return (
    <>
    <a href={link}>
        <PickedIcon size={size} color={color} className=""/>
    </a>
    </>);
}