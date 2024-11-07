import github from "../media/github.svg";
import x from "../media/x.svg";
import linkedin from "../media/linkedin.svg";
import profilePic from "../media/folio_img.jpg";


const Header = () => {
  return (
    <div className="border-b ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl">
      <div className="mt-8 ">
        <div
          className="mb-4 rounded-full bg-gray-100 w-14 h-14 overflow-hidden"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-medium font-heading text-gray-900">
            Prudhvi Deep
          </h1>
          <p className="text-md text-gray-500">Full-Stack Developer</p>
        </div>
        <div className="mt-6 mb-8 flex flex-row space-x-4">
          <a
            href="https://x.com/prudhvideep1996"
            target="_blank"
            rel="noreferrer"
          >
            <img src={x} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/prudhvideep"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/prudhvideep/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Github" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
