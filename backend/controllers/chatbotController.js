// Local basic rule-based AI function
const handleChatQuery = (message) => {
  const lowerMsg = message.toLowerCase();

  // Basic QA logic
  if (lowerMsg.includes('help') || lowerMsg.includes('emergency') || lowerMsg.includes('sos')) {
    return 'For immediate emergency assistance, please call the Women Helpline at 1091, the Domestic Abuse National Helpline at 181, or the Police at 100.';
  } else if (lowerMsg.includes('legal') || lowerMsg.includes('law') || lowerMsg.includes('act')) {
    return 'Under the Protection of Women from Domestic Violence Act, 2005, you have the right to reside in a shared household, seek protection orders, and claim financial relief. Would you like to know more about filing a complaint?';
  } else if (lowerMsg.includes('complaint') || lowerMsg.includes('report') || lowerMsg.includes('file')) {
    return 'You can file a complaint directly on our portal via the "File Complaint" section. Our system will securely record your incident for legal authorities.';
  } else if (lowerMsg.includes('types') || lowerMsg.includes('form of abuse')) {
    return 'Domestic violence includes physical, emotional/verbal, sexual, and economic abuse. Recognizing the abuse is the first step to stopping it.';
  } else {
    return 'I am a basic support assistant. For detailed legal assistance, please review our Legal Rights section. If you are in immediate danger, please use the SOS button or contact 100/1091.';
  }
};

// @desc    Handle chatbot queries
// @route   POST /api/chatbot
// @access  Public
const handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = handleChatQuery(message);
    res.status(200).json({ reply: response });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  handleChat,
};
