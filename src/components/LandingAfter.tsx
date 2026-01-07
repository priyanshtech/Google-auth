export default function LandingAfter(){
    return (
        <div className="flex flex-col h-screen ">
            <nav  className="fixed inset-0 flex items-center justify-center h-10 bg-black/50">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    <a href="/auth/logout" className="border-1 px-2 rounded-md hover:scale-108 transition-all duration-300">Logout</a>
                </ul>
            </nav>
            <h1 className="flex-1 flex items-center justify-center">Welcome To My Google Auth Practice project</h1>
        </div>
    )
}