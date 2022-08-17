const AWS = require('aws-sdk');

const getPoints = async (event) =>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: 'TaskTable',
    }).promise();

    const points = result.Items;

    return {
        status: 200,
        body: {
            points,
        }
    };


}

module.exports = {
    getPoints,
}