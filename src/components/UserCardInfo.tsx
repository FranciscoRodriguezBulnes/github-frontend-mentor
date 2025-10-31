import Image from "next/image";
import GithubLogo from "@/assets/images/github-logo.webp";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function UserCardInfo() {
  return (
    <article className="grid-areas bg-blue-900 p-2 rounded-xl text-white">
      <div className="sectiom-logo grid h-28 w-28 place-content-center rounded-full bg-gray-300 p-1">
        <GitHubIcon className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2>The OctoCat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-date">Joined 25 jan 2011</p>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta
        inventore beatae accusamus? Nam maiores in ipsam suscipit? Officiis,
        eaque.
      </p>
      <div className="section-numbers flex justify-around bg-blue-950">
        <article>
          <p>Repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>3938</p>
        </article>
        <article>
          <p>Following</p>
          <p>9</p>
        </article>
      </div>

      <div className="section-social md:grid md:grid-cols-2">
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>web</p>
        </article>
        <article>
          <i>Icono</i>
          <p>twiter</p>
        </article>
        <article>
          <i>Icono</i>
          <p>Facebook</p>
        </article>
      </div>
    </article>
  );
}
