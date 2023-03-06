function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;

    for (let i = 1; i < lostFights + 1 ; i++) {
        
        if (i % 12 === 0){
            expenses += Number(armorPrice);
            expenses += Number(shieldPrice);
            expenses += Number(helmetPrice);
            expenses += Number(swordPrice);
        }else if (i % 6 === 0){
            expenses += Number(swordPrice);
            expenses += Number(shieldPrice);
            expenses += Number(helmetPrice);
        } else if (i % 2 === 0){
            expenses += Number(helmetPrice);
        }else if (i % 3 === 0){
            expenses += Number(swordPrice);
        }
        
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}