const predictClassification = require("../services/inference_service");
const storeData = require("../services/store_data");
const loadData = require("../services/load_data");
const crypto = require("crypto");

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { label, suggestion } = await predictClassification(model, image);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    id: id,
    result: label,
    suggestion: suggestion,
    createdAt: createdAt,
  };

  await storeData(id, data);

  return h
    .response({
      status: "success",
      message: "Model is predicted successfully",
      data: data,
    })
    .code(201);
}

async function getPredictionHistories(request, h) {
  try {
    const data = await loadData();
    return h.response({
        status: "success",
        data: data,
      }).code(200);

  } catch (error) {
    return h.response({
        status: "fail",
        message: "failed to get prediction histories",
      }).code(500);
  }
}

module.exports = { postPredictHandler, getPredictionHistories };
