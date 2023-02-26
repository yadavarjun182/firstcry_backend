const express = require("express")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    contact: Number,
    email:String,
    password:String,
    Contact:Array,
    Address:Array,
    Child:Array
})

const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel }