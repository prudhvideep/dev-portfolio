import scannerGif from "../media/scanner.gif";
import resume from "../assets/Prudhvi_Mutyala_Resume.pdf";

const Contact = () => {
  return (
    <div className="mt-10 ml-auto mr-auto w-8/10 md:w-9/10 max-w-3xl opacity-100 transform-none">
      <p className="text-[17px] font-serif text-gray-500 mb-4">
        If you have any opportunities, feel free to reach out - I would love to
        chat! You can reach me via my personal email, or drop a DM on{" "}
        <a
          href="https://x.com/prudhvideep1996"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-700"
        >
          Twitter
        </a>
        .
      </p>
      <p className="text-[17px] font-serif text-gray-500 mb-4">
        <span className="font-bold">Email</span>:{" "}
        <a
          href="mailto:prudhvideep1996@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-700"
        >
          prudhvideep1996@gmail.com
        </a>
      </p>
      <p className="text-[17px] font-serif text-gray-500 mb-4">
        <span className="font-bold">Time Zone</span>: MST (Mountain Standard Time)
      </p>

      <div className="mt-16 p-6 w-full border border-gray-300 bg-white rounded-lg shadow-lg">
        <div className="flex flex-row items-center justify-center space-x-6">
          <img className="w-20 h-20 rounded-full" alt="Scanner Gif" src={scannerGif} />
          <div className="flex flex-col">
            <h2 className="text-gray-700 font-serif font-semibold text-lg mb-2">Need a copy of my resume?</h2>
            <a
              href={resume}
              target="_blank"
              className="underline text-gray-700 hover:text-gray-900 font-serif"
            >
              Click here to download it!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
