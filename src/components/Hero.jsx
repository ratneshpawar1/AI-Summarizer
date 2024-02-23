import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav
        className="flex justify-between
        items-center w-full mb-10 pt-3"
      >
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Magic</span>
      </h1>
      <h2 className="desc">
        RapidRecap is a fast and efficient open-source AI summarization web app.
        It swiftly condenses lengthy texts into concise and insightful summaries
        using advanced natural language processing. Ideal for students,
        professionals, and readers looking to save time while staying informed.
        Experience accelerated comprehension with RapidRecap's open-source
        platform.
      </h2>
    </header>
  );
};

export default Hero;
