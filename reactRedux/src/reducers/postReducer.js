const initalstate = [];
export default function post(initalstate=[],action){

  switch(action.type){
    case 'posts_list':
    return action.items;
    break;
    default:
      return initalstate;
  }
}