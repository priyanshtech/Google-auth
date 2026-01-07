import Link from "next/link";
export default function LandingBefore(){
    return (
        <div className="flex flex-col h-screen">
            <nav className="fixed inset-0 flex items-center justify-center h-10 bg-black/50">    
                <div className="flex space-x-4">
                   <p>hello</p>
                    <p>hello</p>
                     <p>hello</p>
                      <p>hello</p>
                       <p>hello</p>
                    <Link className="border-1 px-2 rounded-md hover:scale-108 transition-all duration-300" href={"/auth/login"}>Get Started</Link>

                </div>
            </nav>
            <main className="flex-1">
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-4xl font-bold">Landing Before</h1>
                    </div>
            </main>
        </div>
    )
}