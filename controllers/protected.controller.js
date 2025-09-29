
export default function protectedController(req, res) {
    
    res.status(200).json({msg: "Response from Protected Controller"})
}
