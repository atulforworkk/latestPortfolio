// import { Github, Linkedin, MailCheck } from "lucide-react";
// type Props = {};

// const HireMe = (props: Props) => {
//   return (
//     <div className="flex h-48 py-8">
//       <div className="flex-1 flex justify-center items-center">
//         <h1 className="text-3xl font-semibold ">Hire Me</h1>
//       </div>
//       <div className="flex-1">
//         <a href="">
//           <div className="flex bg-[#212530] w-9/12 h-10 m-2   justify-center  items-center">
//             <Github />

//             <p className="px-4">GitHub</p>
//           </div>
//         </a>
//         <a href="">
//           <div className="flex bg-[#212530] w-9/12 h-10 m-2   justify-center  items-center">
//             <Linkedin />
//             <p>LinkedIn</p>
//           </div>
//         </a>
//         <a href="">
//           <div className="flex bg-[#212530] w-9/12 h-10 m-2   justify-center  items-center">
//             <MailCheck />
//             <p>LinkedIn</p>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HireMe;

// const contactInfo = [];

import { Github, Linkedin, MailCheck } from "lucide-react";
import ContactLink from "../../components/contactInfo/ContactLink";

const HireMe: React.FC = () => {
  const contactInfo = [
    {
      icon: <Github />,
      label: "GitHub",
      href: "https://github.com/atulforworkk",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/atulforworkk/",
    },
    {
      icon: <MailCheck />,
      label: "Email",
      href: "mailto:atulforworkk@gmail.com",
    },
  ];

  return (
    <div className="flex h-48 py-8" id="hire-me-section">
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-3xl font-semibold">Hire Me</h1>
      </div>
      <div className="flex-1">
        {contactInfo.map((info, index) => (
          <ContactLink key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default HireMe;
