const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/input_error");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const classes = ["Cancer", "Non-cancer"];

    const prediction = model.predict(tensor);
    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];
    const suggestion =
      label === "Cancer"
        ? "Segera periksa ke dokter!"
        : "Tidak perlu khawatir.";

    return { label, suggestion };
  } catch (error) {
    // console.error("Error in predictClassification:", error);
    throw new InputError("Terjadi kesalahan dalam melakukan prediksi", 400);
  }
}

module.exports = predictClassification;
