import Posts from "../components/posts"


function Home(){

  return(
    <div className="flex flex-col content-center ">

      <div className="py-8 pr-36 ">
      <input
        type="text"
        placeholder="Search..."
        value=""
        className="border rounded px-4 py-2 w-full "
      />
      </div>

      <Posts/>
    </div>
  )
}

export default Home;