class Desserts {
    constructor (type, calories) {
        this.type = type;
        this.calories = calories;
        console.log('Yum');
    }
}

class IceCream extends Desserts {
    constructor (type, calories, flavor, scoops) {
        super(type);
        this.flavor = flavor;
        this.scoops = scoops;
    }
}