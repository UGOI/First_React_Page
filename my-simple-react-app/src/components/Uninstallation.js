import React from 'react';

function Uninstallation() {
  const copyUninstallCommandToClipboard = () => {
    const uninstallCommand = 'bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/uninstall.sh)"';
    navigator.clipboard.writeText(uninstallCommand);
  };

  return (
    <section id="uninstallation" className="container">
      <h2 className="mt-5">Uninstallation</h2>
      <p>Uninstall AICommand with just one command and remove it from your system.</p>
      <div className="command-container d-inline-flex">
        <pre className="mb-0"><code id="uninstall-command">bash -c "$(curl -fsSL https://ugoi.github.io/AICommand_Page/download/uninstall.sh)"</code></pre>
        <button id="uninstall-copy-button" className="btn btn-danger ml-2" onClick={copyUninstallCommandToClipboard}>Copy</button>
      </div>
    </section>
  );
}

export default Uninstallation;
