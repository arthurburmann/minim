import version from "../version.json";
import logo16 from "../logos/logo.svg";

export function About() {
  return (
    <div className="about-page">
      <br />
      <h1>Minim²</h1>
      <img src={logo16} />
      <br />
      <br />v{version.version}
      <br />
      <br />
      Designed by <a href="https://twitter.com/atulvinayak">@atulvinayak</a>
      <br />
      Forked by <a href="https://twitter.com/0x013d">@0x013d</a>
      <br />
      <br />
      Weather Data by <a href="https://openweathermap.org/">OpenWeather</a>
      <br />
      Backgrounds from <a href="https://unsplash.com/">Unsplash</a>
      <br />
      <br />
      <br />
      <div className="white">
        Everything has beauty, but not everyone sees it.
      </div>
    </div>
  );
}
