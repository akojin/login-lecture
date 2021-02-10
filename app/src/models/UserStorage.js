"use strict";

class UserStorage {
    static #users = {
    id: ["akojin", "nodejs", "나개발"],
    psword: ["1234", "12312", "123123"],
    name : ["우리밋", "나개발", "김팀장"]
    };

static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;;
    }
}

module.exports = UserStorage;