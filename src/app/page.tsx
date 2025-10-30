import SearchIcon from "../components/icons/SearchIcon";

export default function Home() {
  return (
    <>
      <form className="flex flex-wrap gap-2  bg-blue-900 p-2 rounded-xl items-center">
        <span className=" w-10 h-10 flex items-center justify-center">
          <SearchIcon
            width={30}
            height={30}
            className="fill-blue-500"
          />
        </span>
        <input
          type="text"
          placeholder="Search GitHub Username..."
          className=" h-14 flex-1  rounded-lg bg-transparent p-2  text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 rounded-lg py-2 px-4 text-white font-bold">
          Search
        </button>
      </form>
      <article>Todo lo que hay debajo de la página y más, más.</article>
    </>
  );
}
