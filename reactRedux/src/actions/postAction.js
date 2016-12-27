const api_url = "http://localhost:3001"
export function updatePostsAction(items){
    return { type: 'posts_list',items:items }
}

export function getPostsAction() {
  return dispatch => {
        fetch(api_url + '/settings').then(res => {
            return res.json();
        }).then(items => {
            return dispatch(updatePostsAction(items))
        });
 /*   storage.deleteEntry(id)
    .then(() => storage.getAll())
    .then((items) => dispatch(getPostsAction(items)));*/
  };
}