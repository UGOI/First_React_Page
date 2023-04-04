import React from 'react';

function Usage() {
  return (
    <section id="usage" className="container">
      <h2 className="mt-5">Usage</h2>
      <p>Once installed, you can start using AICommand by running:</p>
      <code>ai_command &lt;your-natural-language-command&gt;</code>
      <p>Here are a few examples of natural language commands you can use:</p>
      <ul>
        <li>Create a new folder named MyProject</li>
        <li>Show me the list of files in the current directory</li>
        <li>Delete the file called example.txt</li>
      </ul>
    </section>
  );
}

export default Usage;
