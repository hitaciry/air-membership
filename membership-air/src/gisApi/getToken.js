export const getToken= ()=>{
  return fetch('http://token.aiesec.org.br/get_token.php?token=c0aa46e01d77fb212fe0195636fb515f8e43b530087399ec49f')
    .then(resp=>resp.text())
}