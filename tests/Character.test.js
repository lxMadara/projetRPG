const CharacterFactory = require("../services/CharacterFactory");

describe("Test de création de personnage", () => {
    test("Création d'un Guerrier valide", () => {
        const Guerrier = CharacterFactory.createCharacter("Staline", "Guerrier");
        expect(Guerrier.name).toBe("Staline");
        expect(Guerrier.characterClass).toBe("Guerrier");
    });

    test("Création d'un Mage valide", () => {
        const mage = CharacterFactory.createCharacter("Hitler", "Mage");
        expect(mage.name).toBe("Hitler");
        expect(mage.characterClass).toBe("Mage");
    });

    test("Création d'un Voleur valide", () => {
        const Voleur = CharacterFactory.createCharacter("Maximu", "Voleur");
        expect(Voleur.name).toBe("Maximu");
        expect(Voleur.characterClass).toBe("Voleur");
    });

    test("Validation du nom - Trop court", () => {
        expect(() => CharacterFactory.createCharacter("", "Guerrier")).toThrow("Nom invalide");
    });

    test("Validation du nom - Trop long", () => {
        expect(() => CharacterFactory.createCharacter("A".repeat(16), "Mage")).toThrow("Nom invalide");
    });

    test("Classe invalide", () => {
        expect(() => CharacterFactory.createCharacter("Bob", "Ninja")).toThrow("Classe invalide. Veuillez choisir parmi : Guerrier, Mage, Voleur.");
    });
});
