const StudentController = require("../controllers/StudentController");
const authentication = require("../middlewares/authenticationStudents");
const { upload } = require("../middlewares/multer");
const studentsRouter = require("express").Router();

studentsRouter.get("/", StudentController.getStudents);
studentsRouter.post("/login", StudentController.login);
studentsRouter.post("/googlein", StudentController.googleLogin);
studentsRouter.post("/register", StudentController.register);

// studentsRouter.use(authentication); //auth goes here

studentsRouter.get("/assignments", StudentController.getAssignments);
studentsRouter.post(
  "/upload/:courseId",
  upload.single("file"),
  StudentController.recognizing
);
studentsRouter.get("/:id", StudentController.getStudentById);
studentsRouter.get("/assignments/:id", StudentController.getAssignmentById);

module.exports = studentsRouter;
