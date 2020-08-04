const asyncHandler = require("../middlewares/async");
const Contact = require("../models/Contact");
const ErrorResponse = require("../utils/errorResponse");

// @desc: Create contact
// @route: POST - /api/contacts
// @access: Private
exports.addContact = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const contact = await Contact.create(req.body);

  res.status(201).send({
    contact,
  });
});

// @desc: Get contacts
// @route: GET - /api/contacts
// @access: Private
exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contacts.find({ user: req.user.id });

  res.status(200).json({
    count: contacts.length,
    contacts,
  });
});

// @desc: Update contacts
// @route: PUT - /api/contacts/:id
// @access: Private
exports.updateContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(new ErrorResponse("Contact not found.", 404));
  }

  if (req.user.id !== contact.user.toString()) {
    return next(
      new ErrorResponse("User is not allowed to modify this contact.", 404)
    );
  }

  for (const update in req.body) {
    contact[update] = req.body[update];
  }

  await contact.save();

  res.status(200).json(contact);
});

// @desc: Delete contact
// @route: DELETE - /api/contacts/:id
// @access: Private
exports.deleteContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(new ErrorResponse("Contact not found.", 404));
  }

  if (req.user.id !== contact.user.toString()) {
    return next(
      new ErrorResponse("User is not allowed to modify this contact.", 404)
    );
  }

  await contact.remove();

  res.status(200).json({});
});
