import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs/Observable';
import {PostDetail} from '../models/postdetails';
import {Tag} from '../models/tag';
import {Category} from '../models/category';
import {Success} from '../models/Success';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogDataService {
    Posts: Post[];
    PostDetail: PostDetail[];
    Category: Category[];
    Tag: Tag[];
    public headers: Headers;
     // private postUrl = 'http://localhost:52826/';
     private postUrl = 'http://blog.shahidulla.com/';

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    // get all blog post
    getBlogPostFromApi(): Observable<Post[]> {
        return this.http.get('../assets/data/post.json')
            .map(res => <Post[]>res.json());
    }

    getBlogPostTopTen(): Observable<Post[]> {
        return this.http.get('../assets/data/toptenpost.json')
            .map(res => <Post[]>res.json());
    }

    getBlogPostOnCategory(id: string): Observable<Post[]> {
        return this.http.get(this.postUrl + 'api/blog/GetPostsOnCategory/' + id)
            .map(res => <Post[]>res.json());
    }
    getBlogPostOnTag(id: string): Observable<Post[]> {
        return this.http.get(this.postUrl + 'api/blog/GetPostsOnTag/' + id)
            .map(res => <Post[]>res.json());
    }


    getBlogPostDetails(id: string):Observable<Post>{
        return this.http.get('../assets/data/projectdetails.json')
            .map(res => <Post>res.json());
    }

    getBlogPostCategory(): Observable<Category[]> {
        return this.http.get('../assets/data/categories.json')
            .map(res => <Category[]>res.json());
    }

    getBlogPostTag(): Observable<Tag[]> {
        return this.http.get('../assets/data/categories.json')
            .map(res => <Tag[]>res.json());
    }

    postVisitorMessage(data: string):Observable<Success> {
        return this.http.post(this.postUrl + 'SendMessage', data, { headers: this.headers })
            .map(res => <Success>res.json());

    }
}
