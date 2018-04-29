export class AppConfig {
    readonly apiUrl: string;
    readonly jwt_issuer: string;
    public  googleMapsKey: string;

    constructor() {
        this.apiUrl = 'http://localhost:8000/';
        this.jwt_issuer = 'Denis&Smilyan';
        this.googleMapsKey = 'AIzaSyCGJqupv-L7oKpsfN5pNmH6cWernso96vI';
    }
}
