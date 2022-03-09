const React = require('react')

class Show extends React.Component {
    render() {
        const {pokemon} = this.props
        const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        
if(pokemon.name == 'bulbasaur' || pokemon.name == 'ivysaur' || pokemon.name == 'venusaur') {
    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pokemon</title>
        </head>
        <body style = {{backgroundColor: 'lightgreen'}}>
        <h1><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6GyR3nFisGYmWt7d2wbxD7HgldFntXTnnw&usqp=CAU'></img></h1>
        <h2 style = {{color: 'darkgreen'}}>{pokename}</h2>
        <img src = {`${pokemon.img}.jpg`}></img>
        <br />
        <a style = {{color: 'darkgreen'}} href = '/pokemon'>back</a>
        </body>
        </html>)
}else if (pokemon.name == 'charmander' || pokemon.name == 'charizard'){
    return(
        <body style = {{backgroundColor: 'red'}}>
        <h1><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6GyR3nFisGYmWt7d2wbxD7HgldFntXTnnw&usqp=CAU'></img></h1>
        <h2 style = {{color: 'yellow'}}>{pokename}</h2>
        <img src = {`${pokemon.img}.jpg`}></img>
        <br />
        <a style = {{color: 'yellow'}} href = '/pokemon'>back</a>
        </body>)
}else if (pokemon.name == 'squirtle' || pokemon.name == 'wartortle'){
    return(
        <body style = {{backgroundColor: 'blue'}}>
        <h1><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6GyR3nFisGYmWt7d2wbxD7HgldFntXTnnw&usqp=CAU'></img></h1>
        <h2 style = {{color: 'lightblue'}}>{pokename}</h2>
        <img src = {`${pokemon.img}.jpg`}></img>
        <br />
        <a style = {{color: 'lightblue'}} href = '/pokemon'>back</a>
        </body>)
}else{
    return(
        <body style = {{backgroundColor: 'gold'}}>
        <h1><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6GyR3nFisGYmWt7d2wbxD7HgldFntXTnnw&usqp=CAU'></img></h1>
        <h2 style = {{color: 'red'}}>{pokename}</h2>
        <img src = {`${pokemon.img}`}></img>
        <br />
        <a style = {{color: 'blue'}} href = '/pokemon'>back</a>
        </body>)
}
}}

module.exports = Show