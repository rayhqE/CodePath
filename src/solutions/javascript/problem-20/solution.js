async function getUserData(userId) {
  const fetchProfile = (id) =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ id, name: "John" }), 100)
    );
  const fetchPosts = (id) =>
    new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 100)
    );
  const fetchComments = (postId) =>
    new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, text: "Comment 1" }]), 100)
    );

  try {
    let profile = await fetchProfile(userId);
    let post = await fetchPosts();
    let comment = await fetchComments();
    return { user: profile, posts: post, comments: comment };
  } catch (err) {
    return err;
  }
}

getUserData(1).then((data) => console.log(data));
