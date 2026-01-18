import Caption from "../../components/caption/page";
import EducationFlow from "../../components/educationFlow/page";
import Icon from "../../components/icon/page";
import Button from "../../components/Button/page";
import SkillsSection from "../../components/skill/page";

export default function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-9 px-5 md:px-20 py-10">
        <div className="flex flex-col justify-center md:items-end items-center w-full md:w-1/2 xl:w-full gap-3">
          <div className="flex flex-col gap-1 w-full md:w-full text-center md:p-5 md:pt-5 lg:pt-15 p-2 md:text-left ">
            <div className="flex items-center gap-2 md:justify-start justify-center">
              <div className="h-px bg-gray-300 w-10 md:w-14"></div>
              <p className="text-sm md:text-xl font-bold text-gray-300">Hello</p>
            </div>
            <div className="flex flex-row w-auto gap-1 md:justify-start justify-center md:gap-4 text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold leading-tight text-gray-100">
              <span className="">I'M</span>
              <span className="text-purple-700">Cahya</span>
              <span>Yoga</span>
              <span>Ariyanto</span>
            </div>
            <Caption values='caption' icon="" color="" text="" style="w-full text-gray-300 text-sm md:text-base lg:text-xl opacity-80 uppercase" />
            <Button url='https://scnmodukpcrmdwlmyozl.supabase.co/storage/v1/object/sign/project/Putih%20Minimalis%20Sederhana%20Profesional%20Administrasi%20Perkantoran%20Resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2JjYWZjMy1jMmZlLTQxNTMtOWU2Yi05N2M0MWUzNDQyOTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0L1B1dGloIE1pbmltYWxpcyBTZWRlcmhhbmEgUHJvZmVzaW9uYWwgQWRtaW5pc3RyYXNpIFBlcmthbnRvcmFuIFJlc3VtZS5wZGYiLCJpYXQiOjE3NjU3MjE0NTQsImV4cCI6MTc5NzI1NzQ1NH0.2GE0w190sJ6Z0P2NKOOHSyKU2KbQg8962kcDIHBjLTg' />
            <div className="flex flex-row gap-2 md:gap-5 mt-2 md:justify-start justify-center md:mt-6">
                <Icon nama="ig" link="https://www.instagram.com/ygartn_/" color="red" size={35} />
                <Icon nama="linkedin" link="https://www.linkedin.com/in/cahya-yoga-ariyanto-8b5139261/" color="blue" size={35} />
                <Icon nama="github" link="https://github.com/CahyaYogaAriyanto" color="white" size={35} />
                <Icon nama="gmail" link="https://mail.google.com/mail/?view=cm&fs=1&to=yogakecol123@gmail.com" color="red" size={35} />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
                 <img className="h-[50%] w-auto top-0 right-0 md:w-full md:h-full drop-shadow-[0_0_3px_white] drop-shadow-[0_0_6px_white]"
                     src="/yoga.png" 
                     alt="Foto Profil"
                     style={{ top :0,right :0,opacity:1,zIndex:-1,boxShadow:'10',
                         WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                         maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                     }}
                 />
        </div>
      </div>
      <SkillsSection/>
      <EducationFlow/>
    </>
  );
}


