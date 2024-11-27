

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
    </div>
  );
};

export default Contact;
