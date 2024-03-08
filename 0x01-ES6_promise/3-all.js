/* eslint-disable no-unused-vars */
/* eslint-disable */
import { uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup(){
  return Promise.all([uploadPhoto(), createUser()])
    .then(([resultUP, resultCU]) => {
      console.log(`${resultUP.body} ${resultCU.firstName} ${resultCU.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
