// RanzAI Target AI instructions
window.RanzAI_TARGETS = {
  chatgpt: 'Optimize the final prompt for ChatGPT image generation. Use natural descriptive language, clear subject, composition, lighting, mood, background, and quality direction. Do not use Midjourney parameters.',
  gemini: 'Optimize the final prompt for Gemini image generation. Use clean descriptive sentences, strong object relationships, visual hierarchy, and concise artistic direction. Do not use Midjourney parameters.',
  midjourney: 'Optimize the final prompt for Midjourney. Use compact high-impact visual phrases, strong aesthetic keywords, camera terms, lighting terms, and add suitable Midjourney parameters such as --ar, --style raw, --stylize only when useful.',
  flux: 'Optimize the final prompt for Flux. Use precise natural language, strong subject clarity, realistic texture detail, clean composition, and avoid unnecessary prompt clutter.',
  sdxl: 'Optimize the final prompt for SDXL. Use detailed descriptive tags, subject clarity, lighting, camera/lens terms, style tags, quality tags, and keep the prompt structured for Stable Diffusion style generation.',
  leonardo: 'Optimize the final prompt for Leonardo AI. Use polished creative direction, clear subject, environment, lighting, style, mood, and quality tags suitable for visual generation.',
  ideogram: 'Optimize the final prompt for Ideogram. Make text elements, typography, layout, poster composition, and readable design direction clear when the image contains text or graphic design.',
  recraft: 'Optimize the final prompt for Recraft. Focus on clean design systems, vector-like clarity, branding, layout, shape language, typography, and commercial visual polish.',
  dalle: 'Optimize the final prompt for DALL·E. Use clear natural language, exact visual instructions, subject placement, background, style, lighting, and avoid overly technical parameter syntax.'
};

window.getTargetAIInstruction = function(targetAI) {
  return window.RanzAI_TARGETS[targetAI] || window.RanzAI_TARGETS.chatgpt;
};
