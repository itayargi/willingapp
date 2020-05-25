import { decorate, observable } from "mobx"
import { serializable, primitive } from "serializr"
import persist from "mobx-persist"

class Post {
    id = Math.random()
    title = ""
    finished = false
}

decorate(Post, {
    title: [serializable(primitive), persist("object"), observable],
    finished: [serializable(primitive), observable]
})

export var Store= observable({
  posts = [],
  addPost: mobx.action(function addPost(post) {
    store.posts.push(post);
  }),
})

  
