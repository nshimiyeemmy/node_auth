import { client } from '../db.js'

export const user = client.db("node_authentication").collection("user")