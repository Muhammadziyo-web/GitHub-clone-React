import axios from "axios"
import db from '../db.json'
import followers from '../followers.json'
import following from '../following.json'


export default {
   getUserInfo:  ()=>{
       return db
   },
   getFollowers:  ()=>{
    return followers
},  getFollowing:  ()=>{
    return following
}
}
