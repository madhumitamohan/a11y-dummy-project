import React from 'react';

function MoreA11yIssues() {
  return (
    <div>
      <h2>More Accessibility Issues Examples</h2>

      {/* Issue 1: Missing label for input */}
      <input type="text" placeholder="Enter email" />

      {/* Issue 2: Image with empty alt text but not decorative */}
      <img src="another_image.png" alt="" />

      {/* Issue 3: Button without accessible name */}
      <button></button>

      {/* Issue 4: Using div as a button without role and keyboard handlers */}
      <div onClick={() => alert('Div button clicked!')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid black' }}>
        Clickable Div
      </div>

      {/* Issue 5: Insufficient color contrast (example, not directly lintable without tools) */}
      <p style={{ color: 'navy', backgroundColor: 'lightblue' }}>
        This text might have poor contrast.
      </p>

      {/* Issue 6: Heading levels skipped */}
      <h4>Sub-heading without H3</h4>

      {/* Issue 7: Link with generic text */}
      <a href="#">Click here</a>

      {/* Issue 8: Redundant title attribute on interactive element */}
      <button title="Submit Button">Submit</button>

      {/* Issue 9: Using <br> for spacing instead of CSS */}
      <p>Line 1<br />Line 2</p>

      {/* Issue 10: Missing scope on table headers */}
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laptop</td>
            <td>$1200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MoreA11yIssues;
