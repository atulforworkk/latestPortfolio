
type ContactLinkProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const ContactLink: React.FC<ContactLinkProps> = ({ icon, label, href }) => (
  <a href={href} target="_blank">
    <div className="flex bg-[#212530] w-9/12 h-10 m-2 justify-center items-center hover:bg-green-500">
      {icon}
      <p className="px-4">{label}</p>
    </div>
  </a>
);

export default ContactLink;
