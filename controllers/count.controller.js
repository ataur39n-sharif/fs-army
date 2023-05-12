const { analyzeString } = require("../services/count.service")

const CountController = {
    //calculate number of items in the word
    count: async (req, res) => {
        try {
            const { word } = req.query
            console.log(word);
            if (!word) return res.status(400).json({
                success: false,
                message: 'Please provide a word to count'
            })
            const result = analyzeString(word)
            return res.status(200).json({
                success: true,
                result
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = CountController