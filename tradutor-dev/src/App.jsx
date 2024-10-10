
const languages = [
  { code: 'en', name: 'Inglês'},
  { code: 'es', name: 'Espanhol'},
  { code: 'fr', name: 'Francês'},
  { code: 'de', name: 'Alemão'},
  { code: 'it', name: 'Italiano'},
  { code: 'pt', name: 'Português'},
]

function App() {
  
    return (
      <div className="min-h-screen bg-background flex flex-col">

        <header className=" bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center">
            <h1 className="text-headerColor text-2xl font-bold">Tradutor Dev</h1>
          </div>
        </header>

        <main className="flex-grow flex items-start justify-center px-4 py-8">
          <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <select className="text-sm text-textColor bg-transparent border-none focus:outiline-none cursor-pointer">                
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}               
              </select>
            </div>
          </div>
        </main>

      </div>
  )
}

export default App
