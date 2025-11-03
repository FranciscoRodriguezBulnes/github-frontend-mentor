// "use client";

import SearchIcon from "@/components/icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

export default function FormSearchUser({ getUser }: Props) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("submit");
    // console.log(e.currentTarget.username.value);
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      // action="/"
      // method="get"
      className="flex flex-wrap gap-2  bg-blue-900 p-2 rounded-xl items-center mb-6"
    >
      <span className=" w-10 h-10 flex items-center justify-center">
        <SearchIcon
          width={30}
          height={30}
          className="fill-blue-500"
        />
      </span>
      <input
        name="username"
        type="text"
        placeholder="Search GitHub Username..."
        className=" h-14 flex-1  rounded-lg bg-transparent p-2  text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 rounded-lg py-2 px-4 text-white font-bold">
        Search
      </button>
    </form>
  );
}
