const { Guerrier, Mage, Voleur } = require("./class");

describe("Test de création de personnage", () => {
    test("Création d'un Guerrier valide", () => {
        const warrior = new Guerrier("staline");
        expect(warrior.name).toBe("staline");
        expect(warrior.characterClass).toBe("Guerrier");
    });

    test("Création d'un Mage valide", () => {
        const mage = new Mage("hitler");
        expect(mage.name).toBe("hitler");
        expect(mage.characterClass).toBe("Mage");
    });

    test("Création d'un Voleur valide", () => {
        const thief = new Voleur("maximu");
        expect(thief.name).toBe("maximu");
        expect(thief.characterClass).toBe("Voleur");
    });

    test("Validation du nom - Trop court", () => {
        expect(() => new Guerrier("")).toThrow("Nom invalide");
    });

    test("Validation du nom - Trop long", () => {
        expect(() => new Mage("A".repeat(16))).toThrow("Nom invalide");
    });
});
