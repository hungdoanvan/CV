import { storage } from "./firebaseInit"

async function get(user_id, path){
  let img_url;
  await storage
    .ref(`images/${user_id}/${path}`)
    .getDownloadURL()
    .then(url => {
      img_url = url;
    });
  return img_url;
}

function post(){
  
}

export { get, post }