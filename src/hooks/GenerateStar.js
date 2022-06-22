const GenerateStar = (turn) => {
    if (turn < 18) {
        return ['star1', 'srar2', 'star3'];
    } else if (turn < 26) {
        return ['star1', 'srar2'];
    } else {
        return ['star1'];
    }
};

export default GenerateStar;
