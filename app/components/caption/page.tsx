"use client";
import usePortfolio from "../../core/services";
import Icon from "../icon/page";

type PortfolioKeys = "caption" | "total_project" | "on_progres"
interface CaptionProps {
  values: PortfolioKeys;
  style:string;
  text:string;
  icon:string;
  color:string;
}

export default function Caption({values,style,text,icon,color}: CaptionProps) {
  const data = usePortfolio();
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <Icon nama={icon} color={color} size={80} />
      <p className={style} >
      {data[values]}
      </p>
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
}
