
import React, { useState, useEffect } from 'react';
import SignatureForm from './components/SignatureForm';
import SignaturePreview from './components/SignaturePreview';
import { INITIAL_SIGNATURE_DATA } from './constants';
import type { SignatureData } from './types';

function App() {
  const [signatureData, setSignatureData] = useState<SignatureData>(INITIAL_SIGNATURE_DATA);
  const [isEmailManuallyEdited, setIsEmailManuallyEdited] = useState<boolean>(false);

  useEffect(() => {
    if (!isEmailManuallyEdited && signatureData.name) {
      const nameParts = signatureData.name
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/[^a-z\s]/g, '')
        .split(' ')
        .filter(p => p);
        
      if (nameParts.length >= 2) {
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1];
        const email = `${firstName}.${lastName}@enviria.energy`;
        setSignatureData(prevData => ({ ...prevData, email }));
      } else if (nameParts.length === 1) {
        const email = `${nameParts[0]}@enviria.energy`;
        setSignatureData(prevData => ({ ...prevData, email }));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signatureData.name, isEmailManuallyEdited]);

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center space-x-4">
          <img src="https://a.storyblok.com/f/233186/2400x2672/f5d9dd3cf2/favicon-enviira_weissraum.png" alt="Enviria Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-slate-900">E-Mail Signatur Generator</h1>
        </div>
      </header>
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <SignatureForm
                signatureData={signatureData}
                setSignatureData={setSignatureData}
                setIsEmailManuallyEdited={setIsEmailManuallyEdited}
              />
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <SignaturePreview signatureData={signatureData} />
            </div>
          </div>
        </div>
      </main>
       <footer className="text-center py-6 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} enviria energy holding GmbH. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;