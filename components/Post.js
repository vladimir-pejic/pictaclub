import {
    HeartIcon,
    MenuIcon,
    PaperAirplaneIcon,
    DotsHorizontalIcon,
    PlusCircleIcon,
    SearchIcon,
    UserGroupIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon
} from "@heroicons/react/outline";

import { HeartIcon as HearIconFilled } from "@heroicons/react/solid";

function Post({id, username, caption, userImg, img}) {
    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer"/>
                <p className="flex-1 font-bold"><span className="cursor-pointer">{username}</span></p>
                <DotsHorizontalIcon className="h-5 cursor-pointer" />
            </div>

            <img src={img} className="object-cover w-full" alt="" />

            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-3">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>

                <BookmarkIcon className="btn"/>
            </div>

            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username} </span>
                {caption}
            </p>

            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input type="text"
                       placeholder="Add a comment..."
                       className="border-none flex-1 focus:ring-0 outline-none" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>

        </div>
    )
}

export default Post;