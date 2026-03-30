const VOID_HTML_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function validateHtml(code: string): string | null {
  if (!code.trim()) {
    return null;
  }

  const tagPattern = /<\/?([a-z][\w-]*)(?:\s[^<>]*)?>/gi;
  const tagStack: string[] = [];

  for (const match of code.matchAll(tagPattern)) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();
    const isClosingTag = fullTag.startsWith('</');
    const isSelfClosingTag = fullTag.endsWith('/>') || VOID_HTML_TAGS.has(tagName);

    if (isClosingTag) {
      const lastOpenedTag = tagStack.pop();

      if (lastOpenedTag !== tagName) {
        return `Closing tag </${tagName}> does not match the current HTML structure.`;
      }

      continue;
    }

    if (!isSelfClosingTag) {
      tagStack.push(tagName);
    }
  }

  if (tagStack.length > 0) {
    return `Missing closing tag for <${tagStack[tagStack.length - 1]}>.`;
  }

  return null;
}

function validateCss(code: string): string | null {
  if (!code.trim()) {
    return null;
  }

  try {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(code);
    return null;
  } catch (error) {
    if (error instanceof Error && error.message) {
      return error.message;
    }

    return 'CSS contains invalid syntax.';
  }
}

function validateJs(code: string): string | null {
  if (!code.trim()) {
    return null;
  }

  try {
    new Function(code);
    return null;
  } catch (error) {
    if (error instanceof Error && error.message) {
      return error.message;
    }

    return 'JavaScript contains invalid syntax.';
  }
}

export const PlaygroundValidation = {
  html: validateHtml,
  css: validateCss,
  js: validateJs,
};
