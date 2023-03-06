function solve (month){

    if (month < 1 || month > 12){
        Console.log('Error!');

    }
    if (month == 1){
        Console.log('January');
    } else if (month == 2){
        Console.log('February');
    }else if (month == 3){
        Console.log('March');
    } else if (month == 4){
        Console.log('April');
    } else if (month == 5){
        Console.log('May');
    } else if (month == 6){
        Console.log('Juny');
    } else if (month == 7){
        Console.log('July');
    } else if (month == 8){
        Console.log('August');
    } else if (month == 9){
        Console.log('Sempember');
    } else if (month == 10){
        Console.log('October');
    } else if (month == 11){
        Console.log('November');
    } else if (month == 12){
        Console.log('December');
    }
}

solve(1)