const asyncHandler = require("../middlewares/async");
const Contact = require("../models/Contact");
const ErrorResponse = require("../utils/errorResponse");

// @desc: Create contact
// @route: POST - /api/contacts
// @access: Private
exports.addContact = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;

  const contactExists = await Contact.findOne({ email: req.body.email });

  if (contactExists) {
    return next(new ErrorResponse("This contact was already added.", 400));
  }

  const contact = await Contact.create(req.body);

  res.status(201).send({
    contact,
  });
});

// @desc: Get contacts
// @route: GET - /api/contacts
// @access: Private
exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find({ user: req.user.id });

  res.status(200).json({
    count: contacts.length,
    contacts,
  });
});

// @desc: Update contacts
// @route: PUT - /api/contacts/:id
// @access: Private
exports.updateContact = asyncHandler(async (req, res, next) => {
  for (const update in req.body) {
    res.resource[update] = req.body[update];
  }

  await res.resource.save();

  res.status(200).json(res.resource);
});

// @desc: Delete contact
// @route: DELETE - /api/contacts/:id
// @access: Private
exports.deleteContact = asyncHandler(async (req, res, next) => {
  await res.resource.remove();

  res.status(200).json({});
});
