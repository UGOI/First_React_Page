import React, { useState } from 'react';

function Uninstallation() {
  const [buttonText, setButtonText] = useState('Copy');

  const copyToClipboard = () => {
    const uninstallCommand = 'bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/uninstall.sh)"';
    navigator.clipboard.writeText(uninstallCommand);
    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy');
    }, 1500);
  };

  return (
    <section id="uninstallation" className="container">
      <h2 className="mt-5">Uninstallation</h2>
      <p>Uninstall AICommand with just one command and remove it from your system.</p>
      <div className="command-container d-flex">
        <pre className="mb-0 command-code" style={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px', marginRight: '10px', lineHeight: '2' }}>
          <code id="uninstall-command">{`bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/uninstall.sh)"`}</code>
        </pre>
        <button id="uninstall-copy-button" className="btn btn-danger" onClick={copyToClipboard} style={{transition: '0.3s'}}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Uninstallation;
