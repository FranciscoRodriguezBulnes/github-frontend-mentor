// import GitHubIcon from "@/components/icons/GitHubIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import { User } from "@/interfaces/user";
import Image from 'next/image';

interface Props {
  user: User;
}

function validateURL(url: string) {
  if (!/^(https?:\/\/)/i.test(url)) {
    url = "http://" + url;
  }
  return url;
}

export default function UserCardInfo({ user }: Props) {
  return (
    <article className="grid-areas bg-blue-900 p-2 rounded-xl text-white">
      <div className="sectiom-logo grid h-28 w-28 place-content-center rounded-full bg-gray-300 p-1">
        <Image src={user.avatar_url} alt={user.login} width={100} height={100} className="rounded-full" />
        {/* <GitHubIcon className="relative top-2 h-full w-full" /> */}
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p>@{user?.login}</p>
      </div>
      <p className="section-date lg:text-right">
        {new Date(user.created_at || "").toLocaleDateString("es", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-loose">
        {user.bio || "This profile has no bio"}
      </p>
      <div className="mt-4 section-numbers flex justify-around bg-blue-950 p-4 rounded-xl text-center">
        <article>
          <p>Repos</p>
          <p className="font-bold text-xl">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="font-bold text-xl">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="font-bold text-xl">{user.following}</p>
        </article>
      </div>

      <div className="section-social mt-4 md:grid md:grid-cols-2 space-y-3">
        <article className="flex space-x-2">
          <i>
            <LocationIcon
              className="fill-white"
              width={"1rem"}
            />
          </i>
          <span>{user.location}</span>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon
              className="fill-white"
              width={"1rem"}
            />
          </i>
          <a
            href={validateURL(user?.blog) || ""}
            className="truncate"
          >
            {user.blog || "not information"}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <TwitterIcon
              className="fill-white"
              width={"1rem"}
            />
          </i>
          <a href={`https://www.twitter.com/${user.twitter_username}`}>
            {user.twitter_username}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildingIcon
              className="fill-white"
              width={"1rem"}
            />
          </i>
          <span>{user?.company || "not information"} </span>
        </article>
      </div>
    </article>
  );
}
