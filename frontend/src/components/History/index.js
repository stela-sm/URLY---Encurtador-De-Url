import './style.css'
export default function History({urls}){



    const truncate = (text, max = 40) => {
        if (!text) return "";
        return text.length > max ? text.slice(0, max) + "..." : text;
      };

      const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
      };

    return (
        <div className="history-container">
          {urls.length > 0 && (
            <table className="history-table">
              <thead>
                <tr>
                  <th>URL Original</th>
                  <th>URL Curta</th>
                  <th></th>
                </tr>
              </thead>
      
              <tbody>
                {urls.map((url, index) => (
                  <tr key={index}>
                    <td title={url.originalUrl}>
                      {truncate(url.originalUrl, 40)}
                    </td>
      
                    <td>{url.shortUrl}</td>
      
                    <td>
      
                      <svg onClick={() => copyToClipboard(url.shortUrl)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
           
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

{urls.length >= 4 && 

<div className="warning-box">
    <span className="warning-icon">ⓘ</span>

    <div>
        <p>
            Você atingiu seu limite de histórico temporário.
            Faça login para armazenar mais URLs e acessar
            seu histórico completo.
        </p>
    </div>
</div>
}

        </div>
      );
}