
export const MineApp = () => {
    const heroes = [
        {
            id: 1,
            name: 'spiderman',
        },
        {
            id: 2,
            name: 'Ant-Man',
        },
        {
            id: 3,
            name: 'WonderWoman',
        },
        {
            id: 4,
            name: 'GreenLantern',
        }
    ];

    const SuperHeroes = ['spiderman',
        'AntMan',
        'WonderWoman',
        'GreenLantern'];


    // const copyHeroes = structuredClone(heroes);
    const sortedHeroes = SuperHeroes.toSorted();
    const reversedHeroes = sortedHeroes.toReversed();
    const nombre = 'Luis Peraza';
    return (
        <>
            <h1>Hello World</h1>
            <h2>My name is : {nombre} </h2>
            <ul>
                {heroes.map(hero => (
                    <li key={hero.id}>{hero.name}</li>
                ))}
                <br />
                {sortedHeroes.map(hero => (
                    <li key={hero}>{hero}</li>
                ))}
                <br />
                {reversedHeroes.map(hero => (
                    <li key={hero}>{hero}</li>
                ))}
            </ul>
        </>
    )
}