const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    const url = "https://storage.googleapis.com/submissionmlgc-alhilaluddin/submissions-model/model.json"
    const modelUrl = process.env.MODEL_URL || url;
    return tf.loadGraphModel(modelUrl);
}
module.exports = loadModel;