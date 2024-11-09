import Link from "next/link";
function Header(){
    return(
        <header className="flex justify-between bg-slate-300">
            {/* LOGO */}
            <div>
                <h1 className="size-auto ">KISAN WEBSITE<b>
               </b></h1>
               
             <div className="flex justify-center">
             <img src="\logo.png"></img>
             <input type="text" placeholder="Search..."></input>
             <button className="mt-1 mr-1 bg-green-500 text-white p-0">Search</button>
            </div>
</div>

            {/* LINK */}
            <div>
                <nav><ul className="flex gap-x-11 text-blue-950">
                    <li><Link href= "/"> Home </Link></li>
                    <li><Link href= "/about" > About </Link></li>
                    <li><Link href= "/contact"> Contact </Link></li>
                    <li><Link href= "/shopbyBrand"> ShopbyBrand </Link></li>
                    <li><Link href= "/cart"> Cart </Link></li>

                </ul>

                </nav>
            </div>
        </header>
    );
}
export default Header;