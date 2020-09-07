const posts = [
    {
        id: '1',
        title: 'My first post',
        body: 'Dont do lazy things',
        published: false,
        author: "1"
    },
    {
        id: '2',
        title: 'My second post',
        body: 'Dont do lazy things',
        published: true,
        author: "1"
    },
    {
        id: '3',
        title: 'My third post',
        body: 'Dont do lazy things',
        published: false,
        author: "2"
    },
    {
        id: '4',
        title: 'My fourth post',
        body: 'Dont do lazy things',
        published: true,
        author: "3"
    }
]

const comments = [{
    id: "1",
    text: "This is my first comment ...",
    author: "1",
    post: "1"
},
{
    id: "2",
    text: "This is my second comment ...",
    author: "2",
    post: "2"
},
{
    id: "3",
    text: "This is my third comment ...",
    author: "3",
    post: "3"
},
{
    id: "4",
    text: "This is my fourth comment ...",
    author: "4",
    post: "4"
},
{
    id: "5",
    text: "This is my fifth comment ...",
    author: "2",
    post: "1"
}]

const users = [{
    id: "1",
    name: "Edgar",
    email: "edgar@gmail.com",
    age: 24
},
{
    id: "2",
    name: "Gabriel",
    email: "gabriel@gmail.com",
    age: 47
},
{
    id: "3",
    name: "David",
    email: "david@gmail.com",
    age: 19
},
{
    id: "4",
    name: "Rosario",
    email: "rosario@gmail.com",
    age: 70
}]


const db = {
    users,
    posts,
    comments
}

export { db as default }