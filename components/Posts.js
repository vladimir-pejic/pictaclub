import Post from "./Post";

const DUMMY = [
    {
        id: 1,
        username: "vladimir",
        userImg: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        caption: "BEST SOCIAL NETWORK!"
    },
    {
        id: 2,
        username: "vladimir",
        userImg: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        caption: "POSTING SOME STUFF!"
    },
    {
        id: 3,
        username: "vladimir",
        userImg: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        caption: "TICANA IS MY LOVE!"
    },
    {
        id: 4,
        username: "vladimir",
        userImg: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEwNDCHSZqOlQ/profile-displayphoto-shrink_200_200/0/1626449741844?e=1642636800&v=beta&t=Uw8v6b18JzlPwxX9aXMUOsVZ0IsoVY5ZE9Nwy-QX6kQ",
        caption: "THIS GUY ROCKS!"
    }
    ];

function Posts() {
    return (
        <div>
            {DUMMY.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts;