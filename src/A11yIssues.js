import React from 'react';

function A11yIssues() {
  return (
    <div>
      <h1>Accessibility Issues Examples</h1>

      {/* Issue 1: Missing alt text for image */}
      <img src="logo.svg" />

      {/* Issue 2: Button without type attribute */}
      <button>Click Me</button>

      {/* Issue 3: Input without label */}
      <input type="text" placeholder="Enter your name" />

      {/* Issue 4: Anchor tag used as button */}
      <a onClick={() => alert('Link clicked!')}>This is a link acting as a button</a>

      {/* Issue 5: Missing scope attribute on table header */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

      {/* Issue 6: Using non-semantic elements for headings */}
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>This looks like a heading</p>

      {/* Issue 7: Missing lang attribute on html element (will be caught by a different rule, but good to include) */}
      {/* This issue is typically caught at the document level, not within a component. */}

      {/* Issue 8: Redundant role on a semantic element */}
      <button role="button">Another Button</button>

      {/* Issue 9: Positive tabindex on an interactive element */}
      <div tabIndex="1">Focusable Div</div>

      {/* Issue 10: No onBlur for interactive element with onClick */}
      <div onClick={() => console.log('Div clicked')}>Clickable Div</div>

    </div>
  );
}

export default A11yIssues;
