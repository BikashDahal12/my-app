function Food(){
    const food1 = "Papaya";
    const food2 = "Mango";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food