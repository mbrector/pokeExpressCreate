const React = require('react')

class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return(
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body style = {{backgroundColor: 'aquamarine'}}>
    <h1 style = {{color: 'blueviolet'}}>See All The Pokemon!</h1>
    <nav>
        <a href="/pokemon/new">Create a new Pokemon!</a>
    </nav>
    <ul>
    {pokemon.map((poke, i)=>{
        const pokename = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
        return(
        <li>
            <a style = {{color: 'blueviolet', fontSize: '25px'}} href = {`/pokemon/${poke.id}`}>
            {pokename}
            </a>
            <br />
            <br />
            <br />
        </li>
        )})}
    </ul>
    
</body>
</html>
)
}
}

module.exports = Index