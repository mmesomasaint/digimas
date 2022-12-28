export default function handler(req, res) {
  // Uncomment the message you intend to check for 
  // to see it displayed on error or success.

  res.status(200).json({message: 'successfully registered!'}) // Check for success message.
  // res.status(401).json({ message: 'An error occured!' }) // Check for error message.
  res.end()
}
