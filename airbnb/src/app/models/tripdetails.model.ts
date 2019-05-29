export class tripdetails {
    public destination: string;
    public totalprice: number;
    public nights: number;
    public review: string;
    public hostname: string;
    public housename: string;
    public imgurl: string;

    constructor() {
        this.destination = "";
        this.totalprice = 0;
        this.nights = 0;
        this.review = "";
        this.hostname = "";
        this.housename = "";
        this.imgurl = "";
    }

    public setDestination(destination: string) {
        this.destination = destination;
    }

    public setReview(review: string) {
        this.review = review;
    }
    public setHostName(host: string) {
        this.hostname = host;
    }
    public setHouseName(house: string) {
        this.housename = house;
    }
}