const AWS = require ('aws-sdk');

const getPoint = async (event) =>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.get({
        TableName: 'TaskTable',
        Key: {  id  },
    }).promise();

    const point =  result.Item;

    return{
        status: 200,
        body: point
    };

};

module.exports = {
    getPoint,
};