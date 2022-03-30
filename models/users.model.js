import db from '../utils/db.js';

export default {
    add(entity) {
        return db('user').insert(entity);
    },
    findByEmail(email){
        return db('user').where('Email', email);
    },
    findAll(){
        return db('user').select();
    },
    banUser(id,isBanned){
        return db('user')
        .update('isBanned',isBanned)
        .where("ID",id)
    }
}