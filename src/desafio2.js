// função anônima que consome uma api e retorna os 5 primeiros resultados usando o slice
(async function () {
    const response = await fetch('https://api.github.com/users')
    let jsonData = await response.json()
    jsonData = jsonData.slice(0,5)
    console.log(jsonData)    
})
()
