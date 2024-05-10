const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    const modelUrl = process.env.MODEL_URL || "https://storage.googleapis.com/submissionmlgc-alhilaluddin/submissions-model/model.json";
    return tf.loadGraphModel(modelUrl);
}
module.exports = loadModel;