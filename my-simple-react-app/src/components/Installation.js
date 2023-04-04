import React from 'react';

function Installation() {
  const copyToClipboard = () => {
    const installCommand = 'bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/install.sh)"';
    navigator.clipboard.writeText(installCommand);
  };

  return (
    <section id="installation" className="container">
      <h2 className="mt-5">Installation</h2>
      <p>Install AICommand with just one command and start using natural language to interact with your terminal.</p>
      <div className="command-container d-inline-flex">
        <pre className="mb-0"><code id="install-command">bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/install.sh)"</code></pre>
        <button id="copy-button" className="btn btn-primary ml-2" onClick={copyToClipboard}>Copy</button>
      </div>
    </section>
  );
}

export default Installation;
