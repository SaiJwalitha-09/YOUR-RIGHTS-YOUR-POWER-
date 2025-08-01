export interface LegalTopic {
  id: string;
  title: string;
  titleTelugu: string;
  description: string;
  descriptionTelugu: string;
  examples: Array<{
    scenario: string;
    scenarioTelugu: string;
    solution: string;
    solutionTelugu: string;
    law: string;
    lawTelugu: string;
  }>;
  keywords: string[];
  keywordsTelugu: string[];
}

export const legalTopics: LegalTopic[] = [
  {
    id: 'consumer-rights',
    title: 'Consumer Rights',
    titleTelugu: 'వినియోగదారుల హక్కులు',
    description: 'Know your rights as a consumer when buying goods or services.',
    descriptionTelugu: 'వస్తువులు లేదా సేవలను కొనుగోలు చేసేటప్పుడు వినియోగదారుగా మీ హక్కులను తెలుసుకోండి.',
    examples: [
      {
        scenario: 'Shopkeeper sold expired food items',
        scenarioTelugu: 'దుకాణదారుడు గడువు ముగిసిన ఆహార పదార్థాలను అమ్మాడు',
        solution: 'You can demand full refund and file complaint with consumer court',
        solutionTelugu: 'మీరు పూర్తి వాపసు డబ్బు డిమాండ్ చేయవచ్చు మరియు వినియోగదారుల కోర్టులో ఫిర్యాదు చేయవచ్చు',
        law: 'Consumer Protection Act 2019 - Right to Safety',
        lawTelugu: 'వినియోగదారుల రక్షణ చట్టం 2019 - భద్రతకు హక్కు'
      },
      {
        scenario: 'Product not working as advertised',
        scenarioTelugu: 'ప్రచారం చేసినట్లు ఉత్పత్తి పని చేయడం లేదు',
        solution: 'Return within warranty period or file complaint for misleading advertisement',
        solutionTelugu: 'వారంటీ కాలంలో తిరిగి ఇవ్వండి లేదా తప్పుదోవ పట్టించే ప్రకటన కోసం ఫిర్యాదు చేయండి',
        law: 'Consumer Protection Act 2019 - Right to Information',
        lawTelugu: 'వినియోగదారుల రక్షణ చట్టం 2019 - సమాచార హక్కు'
      }
    ],
    keywords: ['cheated', 'shopping', 'expired', 'defective', 'refund', 'warranty', 'fake product'],
    keywordsTelugu: ['మోసం', 'షాపింగ్', 'గడువు', 'లోపభూయిష్ట', 'వాపసు', 'వారంటీ', 'నకిలీ వస్తువు']
  },
  {
    id: 'womens-safety',
    title: "Women's Safety Laws",
    titleTelugu: 'మహిళల భద్రతా చట్టాలు',
    description: 'Legal protections and rights for women in various situations.',
    descriptionTelugu: 'వివిధ పరిస్థితుల్లో మహిళలకు చట్టపరమైన రక్షణలు మరియు హక్కులు.',
    examples: [
      {
        scenario: 'Workplace harassment by colleague or boss',
        scenarioTelugu: 'సహోద్యోగి లేదా యజమాని చేత కార్యాలయంలో వేధింపులు',
        solution: 'File complaint with Internal Committee or police under POSH Act',
        solutionTelugu: 'POSH చట్టం కింద అంతర్గత కమిటీ లేదా పోలీసులతో ఫిర్యాదు చేయండి',
        law: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
        lawTelugu: 'కార్యాలయంలో మహిళల లైంగిక వేధింపుల (నివారణ, నిషేధం మరియు పరిష్కారం) చట్టం, 2013'
      },
      {
        scenario: 'Domestic violence by husband or family',
        scenarioTelugu: 'భర్త లేదా కుటుంబంచే గృహహింస',
        solution: 'Lodge FIR, get protection order, seek help from women helpline',
        solutionTelugu: 'FIR దాఖలు చేయండి, రక్షణ ఆర్డర్ పొందండి, మహిళల హెల్ప్‌లైన్ నుండి సహాయం తీసుకోండి',
        law: 'Protection of Women from Domestic Violence Act, 2005',
        lawTelugu: 'గృహహింస నుండి మహిళల రక్షణ చట్టం, 2005'
      }
    ],
    keywords: ['harassment', 'domestic violence', 'workplace', 'safety', 'abuse', 'threat'],
    keywordsTelugu: ['వేధింపులు', 'గృహహింస', 'కార్యాలయం', 'భద్రత', 'దురుపయోగం', 'బెదిరింపులు']
  },
  {
    id: 'cyber-safety',
    title: 'Cyber Safety',
    titleTelugu: 'సైబర్ భద్రత',
    description: 'Protection against online fraud, cyberbullying, and digital crimes.',
    descriptionTelugu: 'ఆన్‌లైన్ మోసం, సైబర్ బెదిరింపులు మరియు డిజిటల్ నేరాలకు వ్యతిరేకంగా రక్షణ.',
    examples: [
      {
        scenario: 'Someone using my photos on fake social media profile',
        scenarioTelugu: 'ఎవరో నా ఫోటోలను నకిలీ సోషల్ మీడియా ప్రొఫైల్‌లో ఉపయోగిస్తున్నారు',
        solution: 'Report to platform, file cyber crime complaint with police',
        solutionTelugu: 'ప్లాట్‌ఫారమ్‌కు రిపోర్ట్ చేయండి, పోలీసులతో సైబర్ క్రైమ్ ఫిర్యాదు చేయండి',
        law: 'Information Technology Act 2000 - Section 66C (Identity Theft)',
        lawTelugu: 'ఇన్ఫర్మేషన్ టెక్నాలజీ చట్టం 2000 - సెక్షన్ 66C (గుర్తింపు దొంగతనం)'
      },
      {
        scenario: 'Received fraudulent call asking for bank details',
        scenarioTelugu: 'బ్యాంక్ వివరాలు అడుగుతూ మోసపూరిత కాల్ వచ్చింది',
        solution: 'Never share OTP or bank details, report to cyber crime helpline 1930',
        solutionTelugu: 'OTP లేదా బ్యాంక్ వివరాలను ఎప్పుడూ షేర్ చేయవద్దు, సైబర్ క్రైమ్ హెల్ప్‌లైన్ 1930కు రిపోర్ట్ చేయండి',
        law: 'Information Technology Act 2000 - Section 66D (Cheating by personation)',
        lawTelugu: 'ఇన్ఫర్మేషన్ టెక్నాలజీ చట్టం 2000 - సెక్షన్ 66D (వ్యక్తిత్వం మార్చి మోసం)'
      }
    ],
    keywords: ['online fraud', 'fake profile', 'otp', 'bank details', 'cyberbullying', 'hacking'],
    keywordsTelugu: ['ఆన్‌లైన్ మోసం', 'నకిలీ ప్రొఫైల్', 'OTP', 'బ్యాంక్ వివరాలు', 'సైబర్ బెదిరింపులు', 'హ్యాకింగ్']
  },
  {
    id: 'emergency-legal-help',
    title: 'Emergency Legal Help',
    titleTelugu: 'అత్యవసర చట్టపరమైన సహాయం',
    description: 'Immediate legal assistance and emergency contact numbers.',
    descriptionTelugu: 'తక్షణ చట్టపరమైన సహాయం మరియు అత్యవసర సంప్రదింపు నంబర్లు.',
    examples: [
      {
        scenario: 'Police not registering my complaint',
        scenarioTelugu: 'పోలీసులు నా ఫిర్యాదుని నమోదు చేయడం లేదు',
        solution: 'Send written complaint by post, approach SP office, contact state helpline',
        solutionTelugu: 'పోస్ట్ ద్వారా వ్రాతపూర్వక ఫిర్యాదు పంపండి, SP కార్యాలయాన్ని సంప్రదించండి, రాష్ట్ర హెల్ప్‌లైన్‌ను సంప్రదించండి',
        law: 'Code of Criminal Procedure 1973 - Section 154 (Right to FIR)',
        lawTelugu: 'క్రిమినల్ ప్రొసీజర్ కోడ్ 1973 - సెక్షన్ 154 (FIR హక్కు)'
      },
      {
        scenario: 'Need urgent legal aid but cannot afford lawyer',
        scenarioTelugu: 'అత్యవసర చట్టపరమైన సహాయం కావాలి కానీ లాయర్‌ను భరించలేకపోతున్నాను',
        solution: 'Contact District Legal Services Authority for free legal aid',
        solutionTelugu: 'ఉచిత చట్టపరమైన సహాయం కోసం జిల్లా న్యాయ సేవల అధికారిని సంప్రదించండి',
        law: 'Legal Services Authorities Act 1987 - Right to Free Legal Aid',
        lawTelugu: 'న్యాయ సేవల అధికారుల చట్టం 1987 - ఉచిత న్యాయ సహాయం హక్కు'
      }
    ],
    keywords: ['police', 'fir', 'lawyer', 'legal aid', 'emergency', 'help', 'urgent'],
    keywordsTelugu: ['పోలీసు', 'FIR', 'లాయర్', 'న్యాయ సహాయం', 'అత్యవసరం', 'సహాయం', 'తక్షణం']
  }
];

export const emergencyContacts = {
  national: [
    { name: 'Police', nametelugu: 'పోలీసు', number: '100' },
    { name: 'Women Helpline', nametelugu: 'మహిళల హెల్ప్‌లైన్', number: '1091' },
    { name: 'Cyber Crime Helpline', nametelugu: 'సైబర్ క్రైమ్ హెల్ప్‌లైన్', number: '1930' },
    { name: 'Legal Aid Helpline', nametelugu: 'న్యాయ సహాయ హెల్ప్‌లైన్', number: '15100' },
    { name: 'Consumer Helpline', nametelugu: 'వినియోగదారుల హెల్ప్‌లైన్', number: '1915' }
  ]
};

// Enhanced rule-based matching system
export const matchProblemToTopic = (userInput: string): LegalTopic | null => {
  const input = userInput.toLowerCase().trim();
  
  if (!input) return null;
  
  let bestMatch: { topic: LegalTopic; score: number } | null = null;
  
  for (const topic of legalTopics) {
    let score = 0;
    
    // Check English keywords
    for (const keyword of topic.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        score += keyword.length > 4 ? 3 : 2; // Longer keywords get higher score
      }
    }
    
    // Check Telugu keywords
    for (const keyword of topic.keywordsTelugu) {
      if (input.includes(keyword)) {
        score += keyword.length > 3 ? 3 : 2;
      }
    }
    
    // Check against example scenarios for better matching
    for (const example of topic.examples) {
      const scenarioWords = example.scenario.toLowerCase().split(/\s+/);
      const scenarioTeluguWords = example.scenarioTelugu.split(/\s+/);
      
      for (const word of scenarioWords) {
        if (word.length > 3 && input.includes(word)) {
          score += 1;
        }
      }
      
      for (const word of scenarioTeluguWords) {
        if (word.length > 2 && input.includes(word)) {
          score += 1;
        }
      }
    }
    
    // Fuzzy matching for common variations
    const commonPhrases = {
      'consumer-rights': ['shop', 'buy', 'purchase', 'store', 'market', 'seller', 'product', 'item', 'goods', 'service', 'money', 'refund', 'exchange', 'return'],
      'womens-safety': ['woman', 'girl', 'lady', 'female', 'wife', 'sister', 'mother', 'daughter', 'harassment', 'safety', 'violence', 'abuse', 'threat', 'office', 'workplace', 'home', 'family'],
      'cyber-safety': ['online', 'internet', 'phone', 'mobile', 'call', 'message', 'email', 'social', 'facebook', 'whatsapp', 'fraud', 'scam', 'fake', 'otp', 'password', 'account', 'bank', 'card'],
      'emergency-legal-help': ['police', 'help', 'urgent', 'emergency', 'fir', 'complaint', 'lawyer', 'court', 'legal', 'rights', 'law']
    };
    
    const phrases = commonPhrases[topic.id as keyof typeof commonPhrases] || [];
    for (const phrase of phrases) {
      if (input.includes(phrase)) {
        score += 1;
      }
    }
    
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { topic, score };
    }
  }
  
  return bestMatch ? bestMatch.topic : getDefaultTopic(input);
};

// Fallback function to provide a relevant topic even when no direct match is found
const getDefaultTopic = (input: string): LegalTopic => {
  const input_lower = input.toLowerCase();
  
  // Try to categorize based on common problem indicators
  if (input_lower.includes('money') || input_lower.includes('pay') || input_lower.includes('buy') || input_lower.includes('sell')) {
    return legalTopics.find(t => t.id === 'consumer-rights')!;
  }
  
  if (input_lower.includes('woman') || input_lower.includes('girl') || input_lower.includes('harassment') || input_lower.includes('violence')) {
    return legalTopics.find(t => t.id === 'womens-safety')!;
  }
  
  if (input_lower.includes('phone') || input_lower.includes('online') || input_lower.includes('internet') || input_lower.includes('call')) {
    return legalTopics.find(t => t.id === 'cyber-safety')!;
  }
  
  // Default to emergency legal help for any unmatched problem
  return legalTopics.find(t => t.id === 'emergency-legal-help')!;
};

export const getRelevantExample = (topic: LegalTopic, userInput: string) => {
  const input = userInput.toLowerCase();
  
  // Try to find the most relevant example based on user input
  for (const example of topic.examples) {
    const scenarioWords = example.scenario.toLowerCase().split(' ');
    const scenarioTeluguWords = example.scenarioTelugu.split(' ');
    
    for (const word of scenarioWords) {
      if (input.includes(word) && word.length > 3) {
        return example;
      }
    }
    
    for (const word of scenarioTeluguWords) {
      if (input.includes(word) && word.length > 2) {
        return example;
      }
    }
  }
  
  // Return first example if no specific match found
  return topic.examples[0];
};