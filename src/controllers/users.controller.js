const express = require("express");
const router = express.Router();
const { validationResult, query } = require("express-validator");

const { mockUsers } = require("../mock/mockData");

/**
 * @swagger
 * /users/by-email:
 *   get:
 *     summary: Get user by email
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Email of the user to get
 *         example: "u1@kitra.abc"
 *         required: true
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID
 *                 name:
 *                   type: string
 *                   description: The user's name
 *                 age:
 *                   type: integer
 *                   description: The user's age
 *                 email:
 *                   type: string
 *                   description: The user's email
 *               example:
 *                 id: 3000
 *                 name: "U1"
 *                 age: 21
 *                 email: "u1@kitra.abc"
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid email format or missing email
 */
const getUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email } = req.query;

    let userInfo = mockUsers.find((user) => user.email === email);
    if (userInfo?.password) {
      userInfo.password = "*****";
    }

    res.status(200).json({
      data: {
        user: userInfo,
      },
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
  "/by-email",
  [
    query("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email address"),
  ],
  getUser
);

module.exports = router;
