// RanzAI Prompt Engine
window.RanzAIEngine = {
  buildPrompt({ format, targetAI, visualStyle }) {
    const targetInstruction = window.getTargetAIInstruction(targetAI);
    const styleInstruction = window.getVisualStyleInstruction(visualStyle);

    if (format === 'json') {
      return `Analyze the uploaded image and create a premium image-generation prompt system output.

IMPORTANT RULES:
- Return ONLY valid JSON.
- No markdown.
- No explanation.
- Use the selected target AI and visual style instructions.
- If visual_style is "normal", prioritize maximum similarity and faithful reconstruction.
- If visual_style is not "normal", reinterpret the image according to that selected visual style while preserving the important subject structure.

TARGET AI INSTRUCTION:
${targetInstruction}

VISUAL STYLE INSTRUCTION:
${styleInstruction}

Return this exact JSON structure:
{
  "target_ai": "${targetAI}",
  "visual_style": "${visualStyle}",
  "ratio": "detected or recommended aspect ratio",
  "style": "detected or selected final art/photography style",
  "visual_description": "complete highly specific scene description",
  "main_subject": "main subject with detailed identity, pose, expression, outfit, body position, proportions, and unique visible details",
  "supporting_elements": "background, props, environment, symbols, graphic elements, object placement, and secondary elements",
  "composition": "framing, crop, subject placement, camera distance, angle, layout, negative space, and visual hierarchy",
  "lighting": "lighting setup, shadow behavior, highlights, contrast, softness, atmosphere",
  "color_palette": "dominant colors, secondary colors, accent colors, saturation, color temperature",
  "mood": "overall emotional tone and atmosphere",
  "camera_angle": "camera angle, lens feel, perspective, depth of field",
  "texture_and_rendering": "line quality, material feel, surface texture, illustration/rendering method, detail level",
  "accuracy_notes": "important details that must be preserved to keep the result visually similar",
  "quality_tags": "generation quality tags suited for the selected target AI",
  "final_prompt": "copy-ready final prompt optimized for the selected target AI and visual style"
}`;
    }

    return `Analyze the uploaded image and generate ONE copy-ready image-generation prompt.

IMPORTANT RULES:
- Output ONLY the final prompt text.
- No explanation.
- No title.
- Use the selected target AI and visual style instructions.
- If visual_style is "normal", generate a faithful reconstruction prompt with maximum similarity to the uploaded image.
- If visual_style is not "normal", create a controlled transformation prompt based on the selected style.

TARGET AI INSTRUCTION:
${targetInstruction}

VISUAL STYLE INSTRUCTION:
${styleInstruction}

Final prompt requirements:
- Describe the main subject with high specificity.
- Include pose, expression, outfit, objects, background, colors, lighting, mood, composition, camera angle, texture/rendering style, and quality direction.
- Make the prompt optimized for ${targetAI}.
- Make the visual direction follow ${visualStyle}.
- Avoid generic wording.
- Keep it powerful, clean, and usable.`;
  }
};
