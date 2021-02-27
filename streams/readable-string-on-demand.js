const { RSA_NO_PADDING } = require("constants");
const { Readable } = require("stream");
const rd = new Readable({
    read(size){
        setTimeout(() => {
            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++ ));
        }, 100);
    }
});
rd.currentCharCode = 65;
rd.pipe(process.stdout);