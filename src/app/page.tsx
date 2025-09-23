import Link from "next/link"

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click&nbsp;<Link href="documents/123" className="text-blue-500 ">here</Link>&nbsp;to go to document id
    </div>
  )
}

export default Home