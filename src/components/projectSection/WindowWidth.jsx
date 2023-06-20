function WindowWidth() {
    let width = window.innerWidth;

    if(width < 769) {
        let mobile = width;
    } else {
        let desktop = width;
    }
    // console.log(width);
};

export default WindowWidth;
