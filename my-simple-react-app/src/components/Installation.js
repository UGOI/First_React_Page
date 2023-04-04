import React, { useState } from 'react';

function Installation() {
  const [buttonText, setButtonText] = useState('Copy');

  const copyToClipboard = () => {
    const installCommand = 'bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/install.sh)"';
    navigator.clipboard.writeText(installCommand);
    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy');
    }, 1500);
  };

  return (
    <section id="installation" className="container">
      <h2 className="mt-5">Installation</h2>
      <p>Install AICommand with just one command and start using natural language to interact with your terminal.</p>
      <div className="command-container d-flex">
        <pre className="mb-0 command-code" style={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px', marginRight: '10px', lineHeight: '2' }}>
          <code id="install-command">{`bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/install.sh)"`}</code>
        </pre>
        <button id="copy-button" className="btn btn-primary" onClick={copyToClipboard} style={{transition: '0.3s'}}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Installation;
