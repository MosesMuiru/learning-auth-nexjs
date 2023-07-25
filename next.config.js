/** @type {import('next').NextConfig} */
const {parsed:myEnv}  = require('dotenv').config()
const nextConfig = {}

module.exports = {nextConfig,
    env:myEnv

}
