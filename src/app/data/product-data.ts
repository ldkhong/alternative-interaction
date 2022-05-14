export class ProductData {
    id: number = 0;
    name: string = 'None';
    color: string = 'None';
    size:  number = 0;
    price: number = 0;
    describe: string = 'None';
    image: ["../../../assets/unknown.jpg"];

	constructor(objectModel: any) {
        if(objectModel['id'] !== null)
            this.id = objectModel['id'];
        if(objectModel['name'] !== null)
            this.name = objectModel['name'];
        if(objectModel['color'] !== null)
            this.color = objectModel['color'];
        if(objectModel['size'] !== null)
            this.size = objectModel['size'];
        if(objectModel['price'] !== null)
            this.price = objectModel['price'];
        if(objectModel['describe'] !== null)
            this.describe = objectModel['describe'];
        if(objectModel['image'] !== null)
            this.image = objectModel['image'].split(" ");
	}
}
