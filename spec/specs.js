describe('romanNumerizer', function() {

    it("I is 1", function() {
        expect(romanNumerizer("1")).to.equal("I");
    });

    it("V is 5", function() {
        expect(romanNumerizer("5")).to.equal("V");
    });

    it("X is 10", function() {
        expect(romanNumerizer("10")).to.equal("X");
    });

    it("L is 50", function() {
        expect(romanNumerizer("50")).to.equal("L");
    });

    it("C is 100", function() {
        expect(romanNumerizer("100")).to.equal("C");
    });

    it("D is 500", function() {
        expect(romanNumerizer("500")).to.equal("D");
    });

    it("M is 1000", function() {
        expect(romanNumerizer("1000")).to.equal("M");
    });

    it("MMIX is 2009", function() {
        expect(romanNumerizer("2009")).to.equal("MMIX");
    });

    it("CVII is 107", function() {
        expect(romanNumerizer("107")).to.equal("CVII");
    });

    it("MMDCCXCIX is 2899", function() {
        expect(romanNumerizer("2899")).to.equal("MMDCCCXCIX");
    });


});
