import Image from "next/image";
import Link from "next/link"

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex bg-gray-900 p-10 rounded-md">
        <Image src="/img/croissant.png" alt="Logo" width={100} height={100} />
        <div className="ps-10">
          <h1 className="text-6xl"><strong>Home</strong></h1>
          <p><i>Welcome to the Croissant Corner!</i></p>
        </div>
      </div>
      <div>
        <a className="border p-5 rounded-md bg-neutral-700" href="/about">About</a>
      </div>
      <div>
        <a className="border p-5 rounded-md bg-neutral-700" href="/settings">Settings</a>
      </div>
    </main>
  );
}

export default Home