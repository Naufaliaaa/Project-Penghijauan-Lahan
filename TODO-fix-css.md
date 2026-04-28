# TODO: Fix CSS Errors in style.css

## Information Gathered
File `style.css` contains numerous syntax errors, AI artifacts, garbage tokens, and broken properties that make it invalid CSS. Key issues found:

1. **Embedded AI/XML artifacts**: `<xai:function_call>`, `<parameter>`, etc. appear in the middle of the CSS.
2. **Invalid property values**:
   - `--border-color: rgba(34 1,97 9 40.8);` → malformed rgba
   - `text-decorati90EE90ne;` → should be `text-decoration: none;`
   - `travar(--orxt-dark)m:` → should be `transform:`
   - `-button {` → should be `.cta-button {`
   - `.ll-item span` → should be `.skill-item span`
   - `.nav{ai-p ::before` → should be `.experience-timeline::before`
3. **Scattered garbage tokens**: `90EE90B`, `255520`, `255150`, `colo`, `2555`, etc.
4. **Wrong media-query target**: `.portfolio-grid` does not exist in HTML; should target `.portfolio-grid-simple`.

## Plan
1. Remove all AI artifacts and garbage tokens.
2. Fix all broken CSS properties and selectors.
3. Update media query to target the correct portfolio class (`.portfolio-grid-simple`).
4. Validate formatting and ensure consistent indentation.
5. Open `index.html` in browser to verify styling renders correctly.

## Dependent Files
- `style.css` (primary file to edit)
- `index.html` (to verify class names match)

## Follow-up Steps
- Open `index.html` in a browser or run a CSS validator to confirm no syntax errors remain.

