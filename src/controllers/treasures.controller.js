const express = require("express");
const router = express.Router();
const {  validationResult, query } = require("express-validator");

const { calculateDistance } = require("../utils/distance");
const { mockTreasures, moneyValues } = require("../mock/mockData");

/**
 * @swagger
 * /treasures:
 *   get:
 *     summary: Returns an array of treasures
 *     tags: [Treasures]
 *     parameters:
 *       - in: query
 *         name: latitude
 *         schema:
 *           type: number
 *         description: Latitude of the location to search for treasures
 *       - in: query
 *         name: longitude
 *         schema:
 *           type: number
 *         description: Longitude of the location to search for treasures
 *       - in: query
 *         name: distance
 *         schema:
 *           type: number
 *         description: Distance in meters to search for treasures from the provided location
 *       - in: query
 *         name: prizeValue
 *         schema:
 *           type: number
 *         description: Optional prize value to filter treasures by
 *         required: false
 *     responses:
 *       200:
 *         description: A successful response with an array of treasures
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The treasure ID
 *                   latitude:
 *                     type: number
 *                     description: The location where the treasure is found
 *                   longitude:
 *                     type: number
 *                     description: The location where the treasure is found
 *                   name:
 *                     type: string
 *                     description: The name of the treasure
 *       400:
 *         description: Bad request (e.g., invalid parameters)
 *       500:
 *         description: Internal server error
 */
const findTreasures = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { latitude, longitude, distance, prizeValue } = req.query;

    let filteredTreasures = mockTreasures.filter((treasure) => {
      const treasureDistance = calculateDistance(
        latitude,
        longitude,
        treasure.latitude,
        treasure.longitude
      );
      return treasureDistance <= distance;
    });

    if (prizeValue) {
        filteredTreasures = filteredTreasures.filter((item) => {
            const treasureValues = moneyValues.filter(a => a.treasure_id === item.id);
            const minValue = Math.min(...treasureValues.map(x => x.amt));
            item.amt = minValue
            return minValue >= prizeValue
        })
    }

    res.status(200).json({
      data: filteredTreasures,
      errors: {},
    });
  } catch (errors) {
    res.status(500).json({
      errors: {
        message: errors.message,
      },
    });
  }
};

router.get(
  "/",
  [
    query("latitude")
      .isFloat({ min: -90, max: 90 })
      .withMessage("Invalid latitude"),
    query("longitude")
      .isFloat({ min: -180, max: 180 })
      .withMessage("Invalid longitude"),
    query("distance")
      .isInt({ min: 1, max: 10 })
      .withMessage("Distance must be 1 or 10 km"),
    query("prizeValue")
      .optional()
      .isInt({ min: 10, max: 30 })
      .withMessage("Prize value must be between $10 and $30"),
  ],
  findTreasures
);

module.exports = router;
