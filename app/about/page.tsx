import Image from "next/image";
import Link from "next/link"

function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex bg-purple-900 p-10 rounded-md">
                <Image src="/img/about.png" alt="Logo" width={100} height={100} />
                <div className="ps-10">
                    <h1 className="text-6xl"><strong>About</strong></h1>
                    <p><i>This is the About Section for Croissant Corner!</i></p>
                </div>
            </div>
            <div>
                <a className="border p-5 rounded-md bg-neutral-700" href="/">Back to Home</a>
            </div>
            <div>
                <a className="border p-5 rounded-md bg-neutral-700" href="../settings">Settings</a>
            </div>
        </main>
    );
}

export default About