const collection = () => {
    const itemList = []

    return {
        addItem: function (name) {
            if (!itemList.some(item => item.name === name)) {
                itemList.push({ name });
            } else {
                console.log(`Item "${name}" already exists.`);
            }
        },
        removeItem: function (name) {
            const index = itemList.findIndex(item => item.name === name);
            if (index !== -1) {
                itemList.splice(index, 1);
            }
        }, getItems: function () {
            return itemList;
        }
    }
}


const item = collection();
item.addItem('item1');
item.addItem('item2');
item.addItem('item3');
console.log(item.getItems());
item.removeItem('item3');
console.log(item.getItems());
