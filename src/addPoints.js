const { v4 } = require('uuid')
const AWS = require('aws-sdk');

const addPoints = async (event) =>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();


    const { username, description, point } = JSON.parse(event.body);
    const createdAt = new Date()
    const id = v4()

    const newPoint = {
        id,
        username,
        description,
        point,
        createdAt,
        done: false
    }

    await dynamodb.put({
        TableName: 'TaskTable',
        Item: newPoint
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newPoint)
    }




};

module.exports = {
    addPoints,

};