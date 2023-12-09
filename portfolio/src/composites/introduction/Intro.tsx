import { Button } from "../../components/ui/button";
import codingImage from "../../assets/coding.svg";
type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="flex h-[70vh]  items-center">
      <div className="flex-1 ">
        <div>
          <h1 className="text-2xl p-6 font-semibold">
            Hi,I am Atul . <br />I love to build amazing Apps.
          </h1>
          <p className="text-lg px-6 text-gray-400">
            A web developer with a passion for creating responsive and
            user-friendly websites. Proficient in frontend technology,, with a
            keen eye for design and a commitment to delivering seamless and
            engaging user experiences. Experienced in collaborating with
            cross-functional teams to bring creative ideas to life and staying
            abreast of the latest front-end development trends.
          </p>
        </div>
        <div>
          <Button className="m-6"> Work with me </Button>
        </div>
      </div>
      <div className="flex-1 ">
        <img src={codingImage} alt="" className="h-72 pl-32 " />
      </div>
    </div>
  );
};

export default Intro;
