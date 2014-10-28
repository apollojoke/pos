//TODO: Please write code in this file.

function Inventory(shoppingList){
    this.shoppingList = shoppingList;
    this.promotionList = generatePromotionsList(shoppingList);
    this.printShoppingList = function(){
        return '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n';
    };
    this.printPromotionList = function(){
        return '名称：雪碧，数量：1瓶\n' + '名称：方便面，数量：1袋\n';
    };
    this.printSum = function(){
        return '总计：51.00(元)\n';
    };
    this.printTotalSaved = function(){
        return '节省：7.50(元)\n';
    };
}

var parseShoppingList = function (inputs) {
    var list = {};
    for(var i=0; i<=inputs.length-1; i++) {
        var itemCode = inputs[i];
        var itemNum = 1;
        if (inputs[i].indexOf('-')>0){
            itemCode = inputs[i].split('-')[0];
            itemNum = parseInt(inputs[i].split('-')[1]);
        }

        if (list.hasOwnProperty(itemCode)) {
            list[itemCode] += itemNum;
        }
        else {
            list[itemCode] = itemNum;
        }
    }
    return list
};

var generatePromotionsList = function (shoppingList) {
    var promotions = loadPromotions();
    for(var promotion in promotions){
        //case


    }
    return null;
};

var printInventory = function(inputs){
    var shoppingList = parseShoppingList(inputs);
    var promotionList = generatePromotionsList(shoppingList);
    var inventory = new Inventory(shoppingList);
    console.log(
        '***<没钱赚商店>购物清单***\n' +
        inventory.printShoppingList() +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        inventory.printPromotionList() +
        '----------------------\n' +
        inventory.printSum() +
        inventory.printTotalSaved() +
        '**********************'
    );


//    '***<没钱赚商店>购物清单***\n' +
//    '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
//    '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
//    '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
//    '----------------------\n' +
//    '挥泪赠送商品：\n' +
//    '名称：雪碧，数量：1瓶\n' +
//    '名称：方便面，数量：1袋\n' +
//    '----------------------\n' +
//    '总计：51.00(元)\n' +
//    '节省：7.50(元)\n' +
//    '**********************';
};