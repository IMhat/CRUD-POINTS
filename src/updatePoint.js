const AWS = require('aws-sdk');

const updatePoint = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

    const { done, username, description, point } = JSON.parse(event.body);

    await dynamodb.update({
        TableName: 'TaskTable',
        Key: { id },
        UpdateExpression: 'set done = :done, username = :username, description = :description, point = :point',
        ExpressionAttributeValues: {
            ':done': done,
            ":username": username,
            ":description": description,
            ":point": point
        },
        ReturnValues: 'ALL_NEW'
    }).promise();

    return {
        status: 200,
        body: JSON.stringify({
            message : 'point update successfully'
        })
    }

    

};

module.exports = {
    updatePoint,
};