import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
//adminの初期化
admin.initializeApp();
//admin権限でfirestoreを操作する。何度も使い回すので先に宣言する。
const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
    response.send({
        statusCode,
        body: JSON.stringify(body)
    })
}

//cloud functionsでデプロイするときはexportをつける（外部から触れるようになる）
//async（非同期処理）req: anyなどはTSの書き方で型をつけている（アノテーション）
export const addDataset = functions.https.onRequest(async (req: any, res: any) => {
    if(req.method !== 'POST') {
        sendResponse(res, 405, {error: 'Invalid Requset!'})//POSTじゃなかったらエラーを変える
    }else{
        const dataset = req.body
        for(const key of Object.keys(dataset)) {
            const data = dataset[key]
            await db.collection('questions').doc(key).set(data)
        }
        sendResponse(res, 200, {message: 'Successfully added dataset!'})
    }
})