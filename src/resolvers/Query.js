const Query = {
    users(parent, args, { db }, info) {

        if (!args.query) {
            return db.users
        }

        return db.users.filter(user => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    comments() {
        return comments
    },
    me() {
        return {
            id: '123098',
            name: 'Gabriel',
            email: 'example@gamil.com',
            age: 20
        }
    },
    post() {
        return {
            id: '12345',
            title: 'My first post',
            body: 'Dont do lazy things',
            published: false
        }
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        }
        return db.posts.filter((post) => {
            return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
        })
    }
}

export { Query as default }