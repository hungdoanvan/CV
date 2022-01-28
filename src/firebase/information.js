import { database } from "./firebaseInit";

async function get(user_id, collection_name){
  return await database
  .collection('users')
  .doc(user_id)
  .collection(collection_name)
  .get()
}

// id ngẫu nhiên 
async function add(user_id, collection_name, dataAdd){
  return await database
  .collection('users')
  .doc(user_id)
  .collection(collection_name)
  .add(dataAdd)
}

async function update(user_id, collection_name , data_id, dataChange){
  return await database
  .collection('users')
  .doc(user_id)
  .collection(collection_name)
  .doc(data_id)
  .update(dataChange)
}

async function remove(user_id, collection_name , data_id){
  return await database
  .collection('users')
  .doc(user_id)
  .collection(collection_name)
  .doc(data_id)
  .delete()
}

function takeShow(modalId){
  let e = document.getElementById(modalId)
  e.classList.toggle("modal")
  e.classList.toggle("show")
}

export { get , add , update , remove, takeShow}