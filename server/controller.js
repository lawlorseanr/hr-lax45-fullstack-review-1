const _ = require('lodash');
const Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      Student.find()
        .then(students => res.status(200).json(students))
        .catch(err => res.status(500).json(err));
    },
    postStudent: function (req, res) {
      Student.create(req.body)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json(err));
    },
    updateName: function (req, res) {
      console.log(req.params.id.slice(1))
      Student.findByIdAndUpdate({ _id: req.params.id.slice(1) }, req.body)
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json(err));
    }
  }
};

module.exports = controller