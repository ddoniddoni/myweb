const users = [
    { id: 1, name: "상돈" },
    { id: 2, name: "또니" },
]
const posts = [
    { id: 1, title: "Post 1", body: "....", userId: 1 },
    { id: 2, title: "Post 2", body: "....", userId: 1 },
    { id: 3, title: "Post 3", body: "....", userId: 2 },
    { id: 4, title: "Post 4", body: "....", userId: 2 },
]

export const getPosts = async () => {
    return posts;
};

export const getPost = async (id) => {
    const post = posts.filter((post) => post.id === parseInt(id));
    return post;
}

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
}