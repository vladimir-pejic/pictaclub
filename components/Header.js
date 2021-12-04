import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline";

function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl'>

                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                           layout="fill"
                           objectFit="contain"
                    />
                </div>

                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src="https://www.marjanvanaubel.com/wp-content/uploads/2019/11/instagram-logo.png"
                           layout="fill"
                           objectFit="contain"
                    />
                </div>

                {/* Search */}
                <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input type="text" className="bg-gray-100 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" placeholder="Search" />
                </div>

            </div>
        </div>
    )
}

export default Header;