class Some {
    constructor(inform) {
        this.inform = inform;
    }
    showInfo() {
        alert(this.inform);
    }
}

const inf = new Some('test file for git');
inf.showInfo();