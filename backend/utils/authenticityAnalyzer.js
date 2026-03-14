const analyzeComplaint = (complaintData) => {
  let score = 50; // Base score

  // 1. Description Analysis
  if (complaintData.description) {
    const wordCount = complaintData.description.trim().split(/\s+/).length;
    
    // Reward detailed descriptions
    if (wordCount > 50) score += 20;
    else if (wordCount > 20) score += 10;
    
    // Penalize extremely short descriptions
    if (wordCount < 5) score -= 30;

    // Check for repetitive characters (gibberish/spam detection)
    // E.g., "aaaaaaa" or "test test test"
    const repetitiveCharRegex = /(.)\1{4,}/; 
    if (repetitiveCharRegex.test(complaintData.description)) {
      score -= 30;
    }
    
    // Simple repeated words check
    const words = complaintData.description.toLowerCase().split(/\s+/);
    const uniqueWords = new Set(words);
    if (words.length > 10 && uniqueWords.size / words.length < 0.3) {
       // Less than 30% of the words are unique indicates spammy repetition
       score -= 20;
    }
  } else {
    score -= 40; // No description is highly suspicious
  }

  // 2. Evidence/Proof Analysis (Strongest indicator)
  if (complaintData.proof) {
    score += 40;
  }

  // 3. Contact Info
  if (complaintData.contactNumber && complaintData.contactNumber.length >= 10) {
    score += 10;
  }
  
  if (complaintData.email && complaintData.email.includes('@')) {
    score += 10;
  }

  // Cap score between 0 and 100
  score = Math.max(0, Math.min(100, score));

  // Determine Label
  let label = 'Moderate Authenticity';
  if (score >= 80) {
    label = 'High Authenticity';
  } else if (score < 50) {
    label = 'Needs Review (Potential Fake)';
  }

  return { score, label };
};

module.exports = { analyzeComplaint };
