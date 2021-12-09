import Image from 'next/image';
import {
    HeartIcon,
    MenuIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    SearchIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";

function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>

                <div className='relative hidden lg:inline-grid w-28 ml-1 cursor-pointer'>
                    <Image src="/img/pictaclub-text.png"
                           layout="fill"
                           objectFit="contain"
                    />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src="/img/pictaclub-logo.png"
                           layout="fill"
                           objectFit="contain"
                    />
                </div>

                {/* Search */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input type="text"
                               className="bg-gray-100 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
                               placeholder="Search"/>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img className="h-10 mr-2 rounded-full cursor-pointer" src="https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ" ></img>
                </div>

            </div>
        </div>
    )
}

export default Header;